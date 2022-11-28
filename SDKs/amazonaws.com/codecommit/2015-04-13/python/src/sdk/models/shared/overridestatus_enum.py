from dataclasses import dataclass, field
from enum import Enum

class OverrideStatusEnum(str, Enum):
    OVERRIDE = "OVERRIDE"
    REVOKE = "REVOKE"

