from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import virtualinterfacestate_enum


@dataclass_json
@dataclass
class DeleteVirtualInterfaceResponse:
    virtual_interface_state: Optional[virtualinterfacestate_enum.VirtualInterfaceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceState' }})
    
