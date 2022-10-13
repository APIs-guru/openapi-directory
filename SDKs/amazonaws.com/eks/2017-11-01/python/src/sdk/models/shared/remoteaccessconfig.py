from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RemoteAccessConfig:
    ec2_ssh_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2SshKey' }})
    source_security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceSecurityGroups' }})
    
