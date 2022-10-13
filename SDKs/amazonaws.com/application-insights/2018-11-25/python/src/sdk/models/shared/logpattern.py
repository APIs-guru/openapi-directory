from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LogPattern:
    pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pattern' }})
    pattern_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatternName' }})
    pattern_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatternSetName' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rank' }})
    
