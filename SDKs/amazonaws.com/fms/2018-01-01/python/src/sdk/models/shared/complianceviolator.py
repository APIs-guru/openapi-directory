from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import violationreason_enum


@dataclass_json
@dataclass
class ComplianceViolator:
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    violation_reason: Optional[violationreason_enum.ViolationReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolationReason' }})
    
