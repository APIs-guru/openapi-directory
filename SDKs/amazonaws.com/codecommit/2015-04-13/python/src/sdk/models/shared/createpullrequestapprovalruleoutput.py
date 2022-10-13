from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import approvalrule


@dataclass_json
@dataclass
class CreatePullRequestApprovalRuleOutput:
    approval_rule: approvalrule.ApprovalRule = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRule' }})
    
