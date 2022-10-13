from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Resource:
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    integer_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerValue' }})
    long_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longValue' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    string_set_value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringSetValue' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
