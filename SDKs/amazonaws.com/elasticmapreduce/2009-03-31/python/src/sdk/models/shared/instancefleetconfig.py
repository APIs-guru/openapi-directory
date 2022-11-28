from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceFleetConfig:
    r"""InstanceFleetConfig
    <p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
    """
    
    instance_fleet_type: InstanceFleetTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceFleetType') }})
    instance_type_configs: Optional[List[InstanceTypeConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceTypeConfigs') }})
    launch_specifications: Optional[InstanceFleetProvisioningSpecifications] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchSpecifications') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    target_on_demand_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetOnDemandCapacity') }})
    target_spot_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetSpotCapacity') }})
    
