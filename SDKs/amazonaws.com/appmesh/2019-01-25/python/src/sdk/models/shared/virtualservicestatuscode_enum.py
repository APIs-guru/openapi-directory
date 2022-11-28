from dataclasses import dataclass, field
from enum import Enum

class VirtualServiceStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DELETED = "DELETED"

