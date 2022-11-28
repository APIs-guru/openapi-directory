from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceTypeConfig:
    r"""InstanceTypeConfig
    <p>An instance type configuration for each instance type in an instance fleet, which determines the EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. When you use an allocation strategy, you can include a maximum of 30 instance type configurations for a fleet. For more information about how to use an allocation strategy, see <a href=\"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html\">Configure Instance Fleets</a>. Without an allocation strategy, you may specify a maximum of five instance type configurations for a fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
    """
    
    instance_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    bid_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BidPrice') }})
    bid_price_as_percentage_of_on_demand_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BidPriceAsPercentageOfOnDemandPrice') }})
    configurations: Optional[List[Configuration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configurations') }})
    custom_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomAmiId') }})
    ebs_configuration: Optional[EbsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EbsConfiguration') }})
    weighted_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WeightedCapacity') }})
    
