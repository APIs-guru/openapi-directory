from dataclasses import dataclass, field
from enum import Enum

class MeshStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"
    INACTIVE = "INACTIVE"

