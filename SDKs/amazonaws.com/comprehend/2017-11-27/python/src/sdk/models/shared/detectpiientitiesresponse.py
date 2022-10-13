from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import piientity


@dataclass_json
@dataclass
class DetectPiiEntitiesResponse:
    entities: Optional[List[piientity.PiiEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    
