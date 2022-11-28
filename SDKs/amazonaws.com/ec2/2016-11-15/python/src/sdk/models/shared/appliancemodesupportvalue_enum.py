from dataclasses import dataclass, field
from enum import Enum

class ApplianceModeSupportValueEnum(str, Enum):
    ENABLE = "enable"
    DISABLE = "disable"

