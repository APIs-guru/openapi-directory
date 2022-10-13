from dataclasses import dataclass, field
from typing import Enum

class VirtualServiceStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DELETED = "DELETED"

