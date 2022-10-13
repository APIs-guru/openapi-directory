from dataclasses import dataclass, field
from typing import Enum

class VpcLinkStatusEnum(str, Enum):
    PENDING = "PENDING"
    AVAILABLE = "AVAILABLE"
    DELETING = "DELETING"
    FAILED = "FAILED"
    INACTIVE = "INACTIVE"

