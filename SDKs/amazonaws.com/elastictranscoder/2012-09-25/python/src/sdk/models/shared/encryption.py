from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Encryption:
    initialization_vector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitializationVector' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    key_md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyMd5' }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    
