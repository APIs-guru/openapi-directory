from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fleet


@dataclass_json
@dataclass
class CreateFleetResult:
    fleet: Optional[fleet.Fleet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Fleet' }})
    
