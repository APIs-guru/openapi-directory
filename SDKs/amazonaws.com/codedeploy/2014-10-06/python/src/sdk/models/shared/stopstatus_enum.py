from dataclasses import dataclass, field
from enum import Enum

class StopStatusEnum(str, Enum):
    PENDING = "Pending"
    SUCCEEDED = "Succeeded"

