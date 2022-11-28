from dataclasses import dataclass, field
from enum import Enum

class RuleStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

