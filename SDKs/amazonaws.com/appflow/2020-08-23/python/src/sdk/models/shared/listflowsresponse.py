from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import flowdefinition


@dataclass_json
@dataclass
class ListFlowsResponse:
    flows: Optional[List[flowdefinition.FlowDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flows' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
