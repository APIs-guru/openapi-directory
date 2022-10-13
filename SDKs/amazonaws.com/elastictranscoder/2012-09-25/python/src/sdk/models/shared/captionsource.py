from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import encryption


@dataclass_json
@dataclass
class CaptionSource:
    encryption: Optional[encryption.Encryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encryption' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Label' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Language' }})
    time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeOffset' }})
    
