from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import newpublicvirtualinterfaceallocation


@dataclass_json
@dataclass
class AllocatePublicVirtualInterfaceRequest:
    connection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    new_public_virtual_interface_allocation: newpublicvirtualinterfaceallocation.NewPublicVirtualInterfaceAllocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newPublicVirtualInterfaceAllocation' }})
    owner_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerAccount' }})
    
