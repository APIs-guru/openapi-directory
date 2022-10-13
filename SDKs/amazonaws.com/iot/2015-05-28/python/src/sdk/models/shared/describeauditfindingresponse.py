from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import auditfinding


@dataclass_json
@dataclass
class DescribeAuditFindingResponse:
    finding: Optional[auditfinding.AuditFinding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finding' }})
    
