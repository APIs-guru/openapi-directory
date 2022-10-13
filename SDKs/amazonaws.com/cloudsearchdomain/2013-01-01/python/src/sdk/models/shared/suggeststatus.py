from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SuggestStatus:
    rid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rid' }})
    timems: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timems' }})
    
