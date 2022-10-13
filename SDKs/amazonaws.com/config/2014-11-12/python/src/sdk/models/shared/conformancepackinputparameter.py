from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConformancePackInputParameter:
    parameter_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterName' }})
    parameter_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterValue' }})
    
