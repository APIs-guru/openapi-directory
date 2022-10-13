from dataclasses import dataclass, field
from typing import Enum

class VpcLinkStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    PENDING = "PENDING"
    DELETING = "DELETING"
    FAILED = "FAILED"

