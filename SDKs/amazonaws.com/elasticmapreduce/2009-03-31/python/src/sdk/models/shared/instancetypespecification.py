from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configuration
from . import ebsblockdevice


@dataclass_json
@dataclass
class InstanceTypeSpecification:
    bid_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BidPrice' }})
    bid_price_as_percentage_of_on_demand_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BidPriceAsPercentageOfOnDemandPrice' }})
    configurations: Optional[List[configuration.Configuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configurations' }})
    custom_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomAmiId' }})
    ebs_block_devices: Optional[List[ebsblockdevice.EbsBlockDevice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsBlockDevices' }})
    ebs_optimized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsOptimized' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    weighted_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeightedCapacity' }})
    
