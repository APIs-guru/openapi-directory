from dataclasses import dataclass, field
from typing import Enum

class JobStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    CANCELED = "CANCELED"
    COMPLETED = "COMPLETED"
    DELETION_IN_PROGRESS = "DELETION_IN_PROGRESS"

