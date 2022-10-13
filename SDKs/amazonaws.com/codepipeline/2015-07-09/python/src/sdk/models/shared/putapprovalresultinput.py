from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import approvalresult


@dataclass_json
@dataclass
class PutApprovalResultInput:
    action_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionName' }})
    pipeline_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineName' }})
    result: approvalresult.ApprovalResult = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    stage_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    
