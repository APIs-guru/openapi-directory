from dataclasses import dataclass, field
from typing import Enum

class VirtualRouterStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DELETED = "DELETED"

