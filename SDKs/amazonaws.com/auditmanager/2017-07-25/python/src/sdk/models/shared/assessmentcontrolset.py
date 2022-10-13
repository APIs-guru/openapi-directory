from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import assessmentcontrol
from . import delegation
from . import role
from . import controlsetstatus_enum


@dataclass_json
@dataclass
class AssessmentControlSet:
    controls: Optional[List[assessmentcontrol.AssessmentControl]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controls' }})
    delegations: Optional[List[delegation.Delegation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delegations' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    manual_evidence_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manualEvidenceCount' }})
    roles: Optional[List[role.Role]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    status: Optional[controlsetstatus_enum.ControlSetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    system_evidence_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemEvidenceCount' }})
    
