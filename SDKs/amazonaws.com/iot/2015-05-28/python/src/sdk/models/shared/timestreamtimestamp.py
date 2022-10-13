from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimestreamTimestamp:
    unit: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
