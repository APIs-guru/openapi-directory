from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import newtransitvirtualinterface


@dataclass_json
@dataclass
class CreateTransitVirtualInterfaceRequest:
    connection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    new_transit_virtual_interface: newtransitvirtualinterface.NewTransitVirtualInterface = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newTransitVirtualInterface' }})
    
