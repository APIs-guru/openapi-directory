from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ArrayPropertiesDetail:
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status_summary: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusSummary' }})
    
