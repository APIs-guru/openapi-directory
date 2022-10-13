from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ParameterAttribute:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    string_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
