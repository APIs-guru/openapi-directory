from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReactionValueFormats:
    emoji: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emoji' }})
    short_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortCode' }})
    unicode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unicode' }})
    
