from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateTransitVirtualInterfaceRequest:
    connection_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    new_transit_virtual_interface: NewTransitVirtualInterface = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newTransitVirtualInterface') }})
    
