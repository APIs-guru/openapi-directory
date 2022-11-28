from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateApprovalRuleTemplateInput:
    approval_rule_template_content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplateContent') }})
    approval_rule_template_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplateName') }})
    approval_rule_template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplateDescription') }})
    
