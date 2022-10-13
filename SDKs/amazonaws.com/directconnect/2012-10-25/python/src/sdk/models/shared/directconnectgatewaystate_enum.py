from dataclasses import dataclass, field
from typing import Enum

class DirectConnectGatewayStateEnum(str, Enum):
    PENDING = "pending"
    AVAILABLE = "available"
    DELETING = "deleting"
    DELETED = "deleted"

