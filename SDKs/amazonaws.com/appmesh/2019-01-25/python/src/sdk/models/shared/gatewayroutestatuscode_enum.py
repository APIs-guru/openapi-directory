from dataclasses import dataclass, field
from enum import Enum

class GatewayRouteStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DELETED = "DELETED"

