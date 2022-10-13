from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import batchdisassociateapprovalruletemplatefromrepositorieserror


@dataclass_json
@dataclass
class BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput:
    disassociated_repository_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disassociatedRepositoryNames' }})
    errors: List[batchdisassociateapprovalruletemplatefromrepositorieserror.BatchDisassociateApprovalRuleTemplateFromRepositoriesError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
