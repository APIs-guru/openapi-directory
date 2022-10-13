from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import newtransitvirtualinterfaceallocation


@dataclass_json
@dataclass
class AllocateTransitVirtualInterfaceRequest:
    connection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    new_transit_virtual_interface_allocation: newtransitvirtualinterfaceallocation.NewTransitVirtualInterfaceAllocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newTransitVirtualInterfaceAllocation' }})
    owner_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerAccount' }})
    
