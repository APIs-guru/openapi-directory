from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIPagedResponseMetadata:
    limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    offset: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Offset' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCount' }})
    
