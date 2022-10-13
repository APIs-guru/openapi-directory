from dataclasses import dataclass, field
from typing import Enum

class VirtualGatewayStatusCodeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DELETED = "DELETED"

