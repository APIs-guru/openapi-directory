from dataclasses import dataclass, field
from typing import Enum

class Ipv6SupportValueEnum(str, Enum):
    ENABLE = "enable"
    DISABLE = "disable"

