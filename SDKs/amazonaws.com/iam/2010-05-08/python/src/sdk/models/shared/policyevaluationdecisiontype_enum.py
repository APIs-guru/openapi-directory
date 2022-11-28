from dataclasses import dataclass, field
from enum import Enum

class PolicyEvaluationDecisionTypeEnum(str, Enum):
    ALLOWED = "allowed"
    EXPLICIT_DENY = "explicitDeny"
    IMPLICIT_DENY = "implicitDeny"

