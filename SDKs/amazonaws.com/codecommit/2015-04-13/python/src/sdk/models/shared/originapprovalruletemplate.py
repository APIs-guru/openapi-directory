from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OriginApprovalRuleTemplate:
    approval_rule_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleTemplateId' }})
    approval_rule_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleTemplateName' }})
    
