from dataclasses import dataclass, field
from enum import Enum

class TransitGatewayStateEnum(str, Enum):
    PENDING = "pending"
    AVAILABLE = "available"
    MODIFYING = "modifying"
    DELETING = "deleting"
    DELETED = "deleted"

