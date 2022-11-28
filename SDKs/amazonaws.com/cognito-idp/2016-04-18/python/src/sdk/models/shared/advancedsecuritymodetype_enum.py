from dataclasses import dataclass, field
from enum import Enum

class AdvancedSecurityModeTypeEnum(str, Enum):
    OFF = "OFF"
    AUDIT = "AUDIT"
    ENFORCED = "ENFORCED"

