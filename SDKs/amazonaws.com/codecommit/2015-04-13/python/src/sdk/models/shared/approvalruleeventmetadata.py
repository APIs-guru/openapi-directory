from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApprovalRuleEventMetadata:
    approval_rule_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleContent' }})
    approval_rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleId' }})
    approval_rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleName' }})
    
