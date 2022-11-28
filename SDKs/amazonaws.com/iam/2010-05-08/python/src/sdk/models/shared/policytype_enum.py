from dataclasses import dataclass, field
from enum import Enum

class PolicyTypeEnum(str, Enum):
    INLINE = "INLINE"
    MANAGED = "MANAGED"

