from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StringAttributeConstraintsType:
    max_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxLength' }})
    min_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinLength' }})
    
