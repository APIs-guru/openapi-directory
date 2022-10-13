from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AudioCodecOptions:
    bit_depth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BitDepth' }})
    bit_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BitOrder' }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Profile' }})
    signed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Signed' }})
    
