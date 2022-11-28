from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdatePullRequestApprovalRuleContentInput:
    approval_rule_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleName') }})
    new_rule_content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newRuleContent') }})
    pull_request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    existing_rule_content_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingRuleContentSha256') }})
    
