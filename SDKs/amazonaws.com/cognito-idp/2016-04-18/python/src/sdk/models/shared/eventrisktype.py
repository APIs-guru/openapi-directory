from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import riskdecisiontype_enum
from . import riskleveltype_enum


@dataclass_json
@dataclass
class EventRiskType:
    compromised_credentials_detected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompromisedCredentialsDetected' }})
    risk_decision: Optional[riskdecisiontype_enum.RiskDecisionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RiskDecision' }})
    risk_level: Optional[riskleveltype_enum.RiskLevelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RiskLevel' }})
    
