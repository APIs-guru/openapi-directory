from dataclasses import dataclass, field
from enum import Enum

class VpcLinkStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    PENDING = "PENDING"
    DELETING = "DELETING"
    FAILED = "FAILED"

