from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdatePullRequestApprovalRuleContentInput:
    approval_rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleName' }})
    existing_rule_content_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'existingRuleContentSha256' }})
    new_rule_content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newRuleContent' }})
    pull_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestId' }})
    
