from dataclasses import dataclass, field
from typing import Enum

class VirtualNodeStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DELETED = "DELETED"

