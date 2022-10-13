from dataclasses import dataclass, field
from typing import Enum

class ApplianceModeSupportValueEnum(str, Enum):
    ENABLE = "enable"
    DISABLE = "disable"

