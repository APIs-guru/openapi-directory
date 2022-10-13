from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreatePullRequestApprovalRuleInput:
    approval_rule_content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleContent' }})
    approval_rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleName' }})
    pull_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestId' }})
    
