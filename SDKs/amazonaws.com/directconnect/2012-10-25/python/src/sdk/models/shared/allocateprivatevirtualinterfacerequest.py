from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import newprivatevirtualinterfaceallocation


@dataclass_json
@dataclass
class AllocatePrivateVirtualInterfaceRequest:
    connection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    new_private_virtual_interface_allocation: newprivatevirtualinterfaceallocation.NewPrivateVirtualInterfaceAllocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newPrivateVirtualInterfaceAllocation' }})
    owner_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerAccount' }})
    
