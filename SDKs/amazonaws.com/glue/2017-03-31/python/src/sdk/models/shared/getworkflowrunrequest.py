from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetWorkflowRunRequest:
    include_graph: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeGraph' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    run_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunId' }})
    
