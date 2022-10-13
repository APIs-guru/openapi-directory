from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import encryption


@dataclass_json
@dataclass
class CaptionFormat:
    encryption: Optional[encryption.Encryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encryption' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pattern' }})
    
