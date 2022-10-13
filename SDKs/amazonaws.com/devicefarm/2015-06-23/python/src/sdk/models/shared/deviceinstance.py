from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import instanceprofile
from . import instancestatus_enum


@dataclass_json
@dataclass
class DeviceInstance:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    device_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceArn' }})
    instance_profile: Optional[instanceprofile.InstanceProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceProfile' }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    status: Optional[instancestatus_enum.InstanceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    udid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'udid' }})
    
