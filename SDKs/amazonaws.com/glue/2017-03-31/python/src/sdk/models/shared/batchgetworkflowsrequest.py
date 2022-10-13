from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchGetWorkflowsRequest:
    include_graph: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeGraph' }})
    names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Names' }})
    
