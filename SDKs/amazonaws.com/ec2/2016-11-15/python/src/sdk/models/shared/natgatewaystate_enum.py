from dataclasses import dataclass, field
from enum import Enum

class NatGatewayStateEnum(str, Enum):
    PENDING = "pending"
    FAILED = "failed"
    AVAILABLE = "available"
    DELETING = "deleting"
    DELETED = "deleted"

