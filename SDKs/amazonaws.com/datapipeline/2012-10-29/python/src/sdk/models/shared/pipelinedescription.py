from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import field
from . import tag


@dataclass_json
@dataclass
class PipelineDescription:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    fields: List[field.Field] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pipeline_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineId' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
