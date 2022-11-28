from dataclasses import dataclass, field
from enum import Enum

class ClientVpnEndpointStatusCodeEnum(str, Enum):
    PENDING_ASSOCIATE = "pending-associate"
    AVAILABLE = "available"
    DELETING = "deleting"
    DELETED = "deleted"

