from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchDisassociateApprovalRuleTemplateFromRepositoriesInput:
    approval_rule_template_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRuleTemplateName') }})
    repository_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryNames') }})
    
