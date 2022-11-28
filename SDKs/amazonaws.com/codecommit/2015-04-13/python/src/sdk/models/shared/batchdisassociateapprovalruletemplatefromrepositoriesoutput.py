from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput:
    disassociated_repository_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disassociatedRepositoryNames') }})
    errors: List[BatchDisassociateApprovalRuleTemplateFromRepositoriesError] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
