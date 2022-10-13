from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeltaTime:
    offset_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetSeconds' }})
    time_expression: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeExpression' }})
    
