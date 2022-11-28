from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceFleet:
    r"""InstanceFleet
    <p>Describes an instance fleet, which is a group of EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot Instances, which are provisioned to meet a defined target capacity. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    instance_fleet_type: Optional[InstanceFleetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceFleetType') }})
    instance_type_specifications: Optional[List[InstanceTypeSpecification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceTypeSpecifications') }})
    launch_specifications: Optional[InstanceFleetProvisioningSpecifications] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchSpecifications') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    provisioned_on_demand_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedOnDemandCapacity') }})
    provisioned_spot_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedSpotCapacity') }})
    status: Optional[InstanceFleetStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    target_on_demand_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetOnDemandCapacity') }})
    target_spot_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetSpotCapacity') }})
    
