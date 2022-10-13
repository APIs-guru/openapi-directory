from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateApprovalRuleTemplateDescriptionInput:
    approval_rule_template_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleTemplateDescription' }})
    approval_rule_template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleTemplateName' }})
    
