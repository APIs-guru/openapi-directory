from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuditMitigationActionsTaskTarget:
    r"""AuditMitigationActionsTaskTarget
    Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
    """
    
    audit_check_to_reason_code_filter: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditCheckToReasonCodeFilter') }})
    audit_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditTaskId') }})
    finding_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingIds') }})
    
