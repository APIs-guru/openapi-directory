from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lifecyclestate_enum


@dataclass_json
@dataclass
class MountTargetDescription:
    availability_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZoneId' }})
    availability_zone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZoneName' }})
    file_system_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddress' }})
    life_cycle_state: lifecyclestate_enum.LifeCycleStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifeCycleState' }})
    mount_target_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MountTargetId' }})
    network_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkInterfaceId' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    subnet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
