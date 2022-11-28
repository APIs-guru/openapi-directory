from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AllocateTransitVirtualInterfaceRequest:
    connection_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    new_transit_virtual_interface_allocation: NewTransitVirtualInterfaceAllocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newTransitVirtualInterfaceAllocation') }})
    owner_account: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    
