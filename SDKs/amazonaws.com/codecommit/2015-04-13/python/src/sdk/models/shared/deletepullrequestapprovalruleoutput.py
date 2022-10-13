from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeletePullRequestApprovalRuleOutput:
    approval_rule_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleId' }})
    
