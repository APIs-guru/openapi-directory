from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLocationNfsRequest:
    r"""CreateLocationNfsRequest
    CreateLocationNfsRequest
    """
    
    on_prem_config: OnPremConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnPremConfig') }})
    server_hostname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerHostname') }})
    subdirectory: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    mount_options: Optional[NfsMountOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountOptions') }})
    tags: Optional[List[TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
