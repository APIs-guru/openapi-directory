from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import interconnect


@dataclass_json
@dataclass
class Interconnects:
    interconnects: Optional[List[interconnect.Interconnect]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interconnects' }})
    
