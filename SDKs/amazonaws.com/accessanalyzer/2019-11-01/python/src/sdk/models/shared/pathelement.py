from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import substring


@dataclass_json
@dataclass
class PathElement:
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    substring: Optional[substring.Substring] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'substring' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
