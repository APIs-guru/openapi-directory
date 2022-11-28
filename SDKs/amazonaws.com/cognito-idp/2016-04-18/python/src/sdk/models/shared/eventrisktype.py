from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventRiskType:
    r"""EventRiskType
    The event risk type.
    """
    
    compromised_credentials_detected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompromisedCredentialsDetected') }})
    risk_decision: Optional[RiskDecisionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RiskDecision') }})
    risk_level: Optional[RiskLevelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RiskLevel') }})
    
