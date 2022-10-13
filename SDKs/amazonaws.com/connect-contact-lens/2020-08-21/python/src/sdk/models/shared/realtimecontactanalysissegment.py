from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import categories
from . import transcript


@dataclass_json
@dataclass
class RealtimeContactAnalysisSegment:
    categories: Optional[categories.Categories] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Categories' }})
    transcript: Optional[transcript.Transcript] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Transcript' }})
    
