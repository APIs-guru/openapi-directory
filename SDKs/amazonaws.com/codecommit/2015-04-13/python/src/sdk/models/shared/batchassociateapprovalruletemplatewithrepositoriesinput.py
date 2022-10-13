from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchAssociateApprovalRuleTemplateWithRepositoriesInput:
    approval_rule_template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRuleTemplateName' }})
    repository_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryNames' }})
    
