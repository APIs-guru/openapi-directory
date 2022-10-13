from dataclasses import dataclass, field
from typing import Enum

class JobStateEnum(str, Enum):
    COMPLETED = "Completed"
    PENDING = "Pending"
    FAILED = "Failed"
    DELETING = "Deleting"

