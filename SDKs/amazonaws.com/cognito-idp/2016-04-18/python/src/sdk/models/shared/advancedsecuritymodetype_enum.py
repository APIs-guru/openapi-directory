from dataclasses import dataclass, field
from typing import Enum

class AdvancedSecurityModeTypeEnum(str, Enum):
    OFF = "OFF"
    AUDIT = "AUDIT"
    ENFORCED = "ENFORCED"

