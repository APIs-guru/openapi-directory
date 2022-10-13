from dataclasses import dataclass, field
from typing import Enum

class DNSSupportValueEnum(str, Enum):
    ENABLE = "enable"
    DISABLE = "disable"

