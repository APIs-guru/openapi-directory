from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import newprivatevirtualinterface


@dataclass_json
@dataclass
class CreatePrivateVirtualInterfaceRequest:
    connection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    new_private_virtual_interface: newprivatevirtualinterface.NewPrivateVirtualInterface = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newPrivateVirtualInterface' }})
    
