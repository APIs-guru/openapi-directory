from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import approvalruletemplate


@dataclass_json
@dataclass
class UpdateApprovalRuleTemplateContentOutput:
    approval_rule_template: approvalruletemplate.ApprovalRuleTemplate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleTemplate' }})
    
