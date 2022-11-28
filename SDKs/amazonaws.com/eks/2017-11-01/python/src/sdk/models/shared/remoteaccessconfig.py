from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RemoteAccessConfig:
    r"""RemoteAccessConfig
    An object representing the remote access configuration for the managed node group.
    """
    
    ec2_ssh_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2SshKey') }})
    source_security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSecurityGroups') }})
    
