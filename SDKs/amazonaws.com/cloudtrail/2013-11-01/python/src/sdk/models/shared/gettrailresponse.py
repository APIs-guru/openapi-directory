from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import trail


@dataclass_json
@dataclass
class GetTrailResponse:
    trail: Optional[trail.Trail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Trail' }})
    
