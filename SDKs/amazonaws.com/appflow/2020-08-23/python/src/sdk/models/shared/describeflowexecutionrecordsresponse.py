from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import executionrecord


@dataclass_json
@dataclass
class DescribeFlowExecutionRecordsResponse:
    flow_executions: Optional[List[executionrecord.ExecutionRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowExecutions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
