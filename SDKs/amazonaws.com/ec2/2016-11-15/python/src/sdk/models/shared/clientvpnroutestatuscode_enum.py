from dataclasses import dataclass, field
from enum import Enum

class ClientVpnRouteStatusCodeEnum(str, Enum):
    CREATING = "creating"
    ACTIVE = "active"
    FAILED = "failed"
    DELETING = "deleting"

