from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import studiosummary


@dataclass_json
@dataclass
class ListStudiosOutput:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    studios: Optional[List[studiosummary.StudioSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Studios' }})
    
