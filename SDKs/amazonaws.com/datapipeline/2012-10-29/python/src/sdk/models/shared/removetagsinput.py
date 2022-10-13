from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RemoveTagsInput:
    pipeline_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineId' }})
    tag_keys: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagKeys' }})
    
