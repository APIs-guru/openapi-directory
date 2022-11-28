from dataclasses import dataclass, field
from enum import Enum

class VirtualRouterStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DELETED = "DELETED"

