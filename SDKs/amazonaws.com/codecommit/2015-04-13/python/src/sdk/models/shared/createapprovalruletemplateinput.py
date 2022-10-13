from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateApprovalRuleTemplateInput:
    approval_rule_template_content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleTemplateContent' }})
    approval_rule_template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleTemplateDescription' }})
    approval_rule_template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleTemplateName' }})
    
