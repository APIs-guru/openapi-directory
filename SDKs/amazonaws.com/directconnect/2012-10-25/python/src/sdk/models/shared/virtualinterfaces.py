from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualinterface


@dataclass_json
@dataclass
class VirtualInterfaces:
    virtual_interfaces: Optional[List[virtualinterface.VirtualInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaces' }})
    
