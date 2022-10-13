from dataclasses import dataclass, field
from typing import Enum

class HasLogicalRedundancyEnum(str, Enum):
    UNKNOWN = "unknown"
    YES = "yes"
    NO = "no"

