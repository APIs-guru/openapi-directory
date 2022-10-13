from dataclasses import dataclass, field
from typing import Enum

class VirtualRouterStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"
    INACTIVE = "INACTIVE"

