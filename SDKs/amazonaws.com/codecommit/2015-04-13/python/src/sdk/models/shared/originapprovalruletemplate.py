from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OriginApprovalRuleTemplate:
    r"""OriginApprovalRuleTemplate
    Returns information about the template that created the approval rule for a pull request.
    """
    
    approval_rule_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplateId') }})
    approval_rule_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplateName') }})
    
