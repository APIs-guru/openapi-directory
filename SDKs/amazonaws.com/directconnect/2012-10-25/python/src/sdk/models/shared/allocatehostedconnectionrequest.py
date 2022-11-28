from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AllocateHostedConnectionRequest:
    bandwidth: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    connection_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    connection_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionName') }})
    owner_account: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    vlan: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
