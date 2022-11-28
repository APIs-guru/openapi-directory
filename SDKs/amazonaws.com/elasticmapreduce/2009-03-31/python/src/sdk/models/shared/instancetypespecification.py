from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceTypeSpecification:
    r"""InstanceTypeSpecification
    <p>The configuration specification for each instance type in an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
    """
    
    bid_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BidPrice') }})
    bid_price_as_percentage_of_on_demand_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BidPriceAsPercentageOfOnDemandPrice') }})
    configurations: Optional[List[Configuration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configurations') }})
    custom_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomAmiId') }})
    ebs_block_devices: Optional[List[EbsBlockDevice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EbsBlockDevices') }})
    ebs_optimized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EbsOptimized') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    weighted_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WeightedCapacity') }})
    
