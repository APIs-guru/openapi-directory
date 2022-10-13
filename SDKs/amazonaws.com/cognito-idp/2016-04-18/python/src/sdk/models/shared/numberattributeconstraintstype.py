from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NumberAttributeConstraintsType:
    max_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxValue' }})
    min_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinValue' }})
    
