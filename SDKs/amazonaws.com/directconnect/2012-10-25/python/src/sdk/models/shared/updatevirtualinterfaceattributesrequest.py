from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateVirtualInterfaceAttributesRequest:
    mtu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mtu' }})
    virtual_interface_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceId' }})
    
