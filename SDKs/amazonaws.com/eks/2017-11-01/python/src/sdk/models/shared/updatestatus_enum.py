from dataclasses import dataclass, field
from typing import Enum

class UpdateStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    FAILED = "Failed"
    CANCELLED = "Cancelled"
    SUCCESSFUL = "Successful"

