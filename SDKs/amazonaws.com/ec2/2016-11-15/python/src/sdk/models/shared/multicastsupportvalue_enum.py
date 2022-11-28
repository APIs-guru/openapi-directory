from dataclasses import dataclass, field
from enum import Enum

class MulticastSupportValueEnum(str, Enum):
    ENABLE = "enable"
    DISABLE = "disable"

