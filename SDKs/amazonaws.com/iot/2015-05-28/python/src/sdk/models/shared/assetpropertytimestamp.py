from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssetPropertyTimestamp:
    offset_in_nanos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetInNanos' }})
    time_in_seconds: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeInSeconds' }})
    
