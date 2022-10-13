from dataclasses import dataclass, field
from typing import Enum

class OverrideStatusEnum(str, Enum):
    OVERRIDE = "OVERRIDE"
    REVOKE = "REVOKE"

