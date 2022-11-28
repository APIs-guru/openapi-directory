from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreatePullRequestApprovalRuleInput:
    approval_rule_content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleContent') }})
    approval_rule_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleName') }})
    pull_request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    
