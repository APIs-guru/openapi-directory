from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SetStatusInput:
    object_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectIds' }})
    pipeline_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineId' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
