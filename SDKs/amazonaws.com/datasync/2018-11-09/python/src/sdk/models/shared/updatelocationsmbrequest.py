from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import smbmountoptions


@dataclass_json
@dataclass
class UpdateLocationSmbRequest:
    agent_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentArns' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    location_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationArn' }})
    mount_options: Optional[smbmountoptions.SmbMountOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MountOptions' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    subdirectory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subdirectory' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'User' }})
    
