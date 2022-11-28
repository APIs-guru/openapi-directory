from dataclasses import dataclass, field
from enum import Enum

class InstanceRefreshStatusEnum(str, Enum):
    PENDING = "Pending"
    IN_PROGRESS = "InProgress"
    SUCCESSFUL = "Successful"
    FAILED = "Failed"
    CANCELLING = "Cancelling"
    CANCELLED = "Cancelled"

