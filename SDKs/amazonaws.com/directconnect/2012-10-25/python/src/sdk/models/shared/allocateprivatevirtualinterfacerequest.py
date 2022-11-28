from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AllocatePrivateVirtualInterfaceRequest:
    connection_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    new_private_virtual_interface_allocation: NewPrivateVirtualInterfaceAllocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newPrivateVirtualInterfaceAllocation') }})
    owner_account: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    
