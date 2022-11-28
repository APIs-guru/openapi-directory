from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLocationSmbRequest:
    r"""CreateLocationSmbRequest
    CreateLocationSmbRequest
    """
    
    agent_arns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArns') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    server_hostname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerHostname') }})
    subdirectory: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    user: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    mount_options: Optional[SmbMountOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountOptions') }})
    tags: Optional[List[TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
