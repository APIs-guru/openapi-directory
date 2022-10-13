from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SuggestionMatch:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestion' }})
    
