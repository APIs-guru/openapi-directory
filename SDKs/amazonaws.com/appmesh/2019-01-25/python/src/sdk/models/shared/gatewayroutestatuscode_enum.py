from dataclasses import dataclass, field
from typing import Enum

class GatewayRouteStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DELETED = "DELETED"

