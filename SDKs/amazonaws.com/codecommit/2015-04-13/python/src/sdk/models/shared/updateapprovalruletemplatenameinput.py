from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateApprovalRuleTemplateNameInput:
    new_approval_rule_template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newApprovalRuleTemplateName' }})
    old_approval_rule_template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldApprovalRuleTemplateName' }})
    
