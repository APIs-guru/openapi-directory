from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ParameterValue:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    string_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
