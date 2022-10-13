from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import newpublicvirtualinterface


@dataclass_json
@dataclass
class CreatePublicVirtualInterfaceRequest:
    connection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    new_public_virtual_interface: newpublicvirtualinterface.NewPublicVirtualInterface = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newPublicVirtualInterface' }})
    
