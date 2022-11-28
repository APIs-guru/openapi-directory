from dataclasses import dataclass, field
from enum import Enum

class StaticSourcesSupportValueEnum(str, Enum):
    ENABLE = "enable"
    DISABLE = "disable"

