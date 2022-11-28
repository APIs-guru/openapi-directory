from dataclasses import dataclass, field
from enum import Enum

class RouteStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"
    INACTIVE = "INACTIVE"

