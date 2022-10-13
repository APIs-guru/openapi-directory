from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResumeWorkflowRunRequest:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    node_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeIds' }})
    run_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunId' }})
    
