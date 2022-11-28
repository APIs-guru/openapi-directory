from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchAssociateApprovalRuleTemplateWithRepositoriesOutput:
    associated_repository_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedRepositoryNames') }})
    errors: List[BatchAssociateApprovalRuleTemplateWithRepositoriesError] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
