from dataclasses import dataclass, field
from enum import Enum

class AuthDecisionEnum(str, Enum):
    ALLOWED = "ALLOWED"
    EXPLICIT_DENY = "EXPLICIT_DENY"
    IMPLICIT_DENY = "IMPLICIT_DENY"

