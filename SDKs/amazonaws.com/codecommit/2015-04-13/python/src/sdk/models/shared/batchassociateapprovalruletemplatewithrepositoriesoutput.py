from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import batchassociateapprovalruletemplatewithrepositorieserror


@dataclass_json
@dataclass
class BatchAssociateApprovalRuleTemplateWithRepositoriesOutput:
    associated_repository_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedRepositoryNames' }})
    errors: List[batchassociateapprovalruletemplatewithrepositorieserror.BatchAssociateApprovalRuleTemplateWithRepositoriesError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
