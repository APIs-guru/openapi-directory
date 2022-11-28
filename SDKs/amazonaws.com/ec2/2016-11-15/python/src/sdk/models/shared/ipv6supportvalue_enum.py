from dataclasses import dataclass, field
from enum import Enum

class Ipv6SupportValueEnum(str, Enum):
    ENABLE = "enable"
    DISABLE = "disable"

