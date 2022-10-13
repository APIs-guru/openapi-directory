from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeletePullRequestApprovalRuleInput:
    approval_rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleName' }})
    pull_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestId' }})
    
