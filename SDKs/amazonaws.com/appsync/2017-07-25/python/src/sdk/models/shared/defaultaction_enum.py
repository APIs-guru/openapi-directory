from dataclasses import dataclass, field
from enum import Enum

class DefaultActionEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

