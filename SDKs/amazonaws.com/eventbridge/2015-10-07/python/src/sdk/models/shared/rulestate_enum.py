from dataclasses import dataclass, field
from typing import Enum

class RuleStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

