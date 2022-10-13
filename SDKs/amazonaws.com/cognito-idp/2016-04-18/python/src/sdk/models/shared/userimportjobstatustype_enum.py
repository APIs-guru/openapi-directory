from dataclasses import dataclass, field
from typing import Enum

class UserImportJobStatusTypeEnum(str, Enum):
    CREATED = "Created"
    PENDING = "Pending"
    IN_PROGRESS = "InProgress"
    STOPPING = "Stopping"
    EXPIRED = "Expired"
    STOPPED = "Stopped"
    FAILED = "Failed"
    SUCCEEDED = "Succeeded"

