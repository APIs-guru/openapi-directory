from dataclasses import dataclass, field
from enum import Enum

class NetworkInterfacePermissionStateCodeEnum(str, Enum):
    PENDING = "pending"
    GRANTED = "granted"
    REVOKING = "revoking"
    REVOKED = "revoked"

