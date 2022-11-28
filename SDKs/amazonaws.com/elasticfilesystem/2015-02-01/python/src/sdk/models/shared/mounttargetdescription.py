from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MountTargetDescription:
    r"""MountTargetDescription
    Provides a description of a mount target.
    """
    
    file_system_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    life_cycle_state: LifeCycleStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifeCycleState') }})
    mount_target_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountTargetId') }})
    subnet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    availability_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZoneId') }})
    availability_zone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZoneName') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    network_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkInterfaceId') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
