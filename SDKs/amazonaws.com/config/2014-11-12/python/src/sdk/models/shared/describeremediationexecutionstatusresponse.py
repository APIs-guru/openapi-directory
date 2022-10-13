from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import remediationexecutionstatus


@dataclass_json
@dataclass
class DescribeRemediationExecutionStatusResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    remediation_execution_statuses: Optional[List[remediationexecutionstatus.RemediationExecutionStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemediationExecutionStatuses' }})
    
