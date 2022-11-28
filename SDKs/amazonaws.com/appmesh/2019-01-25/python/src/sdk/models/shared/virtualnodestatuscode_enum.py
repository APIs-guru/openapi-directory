from dataclasses import dataclass, field
from enum import Enum

class VirtualNodeStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DELETED = "DELETED"

