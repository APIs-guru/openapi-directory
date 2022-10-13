from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuditMitigationActionsTaskTarget:
    audit_check_to_reason_code_filter: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditCheckToReasonCodeFilter' }})
    audit_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditTaskId' }})
    finding_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingIds' }})
    
