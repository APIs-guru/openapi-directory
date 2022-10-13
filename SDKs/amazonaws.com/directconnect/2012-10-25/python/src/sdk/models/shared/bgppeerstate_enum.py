from dataclasses import dataclass, field
from typing import Enum

class BgpPeerStateEnum(str, Enum):
    VERIFYING = "verifying"
    PENDING = "pending"
    AVAILABLE = "available"
    DELETING = "deleting"
    DELETED = "deleted"

