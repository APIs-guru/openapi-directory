from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import policycompliancestatustype_enum


@dataclass_json
@dataclass
class EvaluationResult:
    compliance_status: Optional[policycompliancestatustype_enum.PolicyComplianceStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceStatus' }})
    evaluation_limit_exceeded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationLimitExceeded' }})
    violator_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolatorCount' }})
    
