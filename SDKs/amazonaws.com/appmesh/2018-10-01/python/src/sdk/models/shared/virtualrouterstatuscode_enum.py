from dataclasses import dataclass, field
from enum import Enum

class VirtualRouterStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"
    INACTIVE = "INACTIVE"

