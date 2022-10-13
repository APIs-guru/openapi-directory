from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RawString:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha256' }})
    
