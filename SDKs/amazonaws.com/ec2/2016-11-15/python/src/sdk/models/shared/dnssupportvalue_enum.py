from dataclasses import dataclass, field
from enum import Enum

class DNSSupportValueEnum(str, Enum):
    ENABLE = "enable"
    DISABLE = "disable"

