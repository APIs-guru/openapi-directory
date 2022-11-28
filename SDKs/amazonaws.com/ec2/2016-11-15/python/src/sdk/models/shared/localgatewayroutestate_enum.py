from dataclasses import dataclass, field
from enum import Enum

class LocalGatewayRouteStateEnum(str, Enum):
    PENDING = "pending"
    ACTIVE = "active"
    BLACKHOLE = "blackhole"
    DELETING = "deleting"
    DELETED = "deleted"

