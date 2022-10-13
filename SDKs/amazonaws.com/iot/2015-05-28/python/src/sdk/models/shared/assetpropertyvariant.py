from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssetPropertyVariant:
    boolean_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValue' }})
    double_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    integer_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
