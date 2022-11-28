from dataclasses import dataclass, field
from enum import Enum

class TransitGatewayRouteStateEnum(str, Enum):
    PENDING = "pending"
    ACTIVE = "active"
    BLACKHOLE = "blackhole"
    DELETING = "deleting"
    DELETED = "deleted"

