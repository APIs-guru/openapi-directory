from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DecimalNumber:
    scale: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Scale' }})
    unscaled_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnscaledValue' }})
    
