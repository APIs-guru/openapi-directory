from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import virtualinterface


@dataclass_json
@dataclass
class CreateTransitVirtualInterfaceResult:
    virtual_interface: Optional[virtualinterface.VirtualInterface] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterface' }})
    
