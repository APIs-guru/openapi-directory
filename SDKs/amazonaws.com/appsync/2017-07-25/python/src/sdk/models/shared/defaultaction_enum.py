from dataclasses import dataclass, field
from typing import Enum

class DefaultActionEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

