from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApprovalRuleEventMetadata:
    r"""ApprovalRuleEventMetadata
    Returns information about an event for an approval rule.
    """
    
    approval_rule_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleContent') }})
    approval_rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleId') }})
    approval_rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleName') }})
    
