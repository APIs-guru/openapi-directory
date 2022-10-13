from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import field


@dataclass_json
@dataclass
class PipelineObject:
    fields: List[field.Field] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
