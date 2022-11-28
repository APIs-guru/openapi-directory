from dataclasses import dataclass, field
from enum import Enum

class VpcLinkStatusEnum(str, Enum):
    PENDING = "PENDING"
    AVAILABLE = "AVAILABLE"
    DELETING = "DELETING"
    FAILED = "FAILED"
    INACTIVE = "INACTIVE"

