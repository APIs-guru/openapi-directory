from dataclasses import dataclass, field
from enum import Enum

class MeshStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DELETED = "DELETED"

