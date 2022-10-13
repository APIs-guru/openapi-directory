from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configuration
from . import ebsconfiguration


@dataclass_json
@dataclass
class InstanceTypeConfig:
    bid_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BidPrice' }})
    bid_price_as_percentage_of_on_demand_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BidPriceAsPercentageOfOnDemandPrice' }})
    configurations: Optional[List[configuration.Configuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configurations' }})
    custom_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomAmiId' }})
    ebs_configuration: Optional[ebsconfiguration.EbsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsConfiguration' }})
    instance_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    weighted_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeightedCapacity' }})
    
