from dataclasses import dataclass, field
from typing import Enum

class StatusEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"
    PENDING = "Pending"
    FAILED = "Failed"

