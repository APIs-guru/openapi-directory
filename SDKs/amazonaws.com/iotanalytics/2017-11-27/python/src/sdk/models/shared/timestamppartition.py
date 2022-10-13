from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimestampPartition:
    attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeName' }})
    timestamp_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampFormat' }})
    
