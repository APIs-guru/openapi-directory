from dataclasses import dataclass, field
from enum import Enum

class VirtualGatewayStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DELETED = "DELETED"

