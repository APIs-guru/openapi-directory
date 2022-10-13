from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import smbmountoptions
from . import taglistentry


@dataclass_json
@dataclass
class CreateLocationSmbRequest:
    agent_arns: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentArns' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    mount_options: Optional[smbmountoptions.SmbMountOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MountOptions' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    server_hostname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerHostname' }})
    subdirectory: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subdirectory' }})
    tags: Optional[List[taglistentry.TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    user: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'User' }})
    
