from dataclasses import dataclass, field
from typing import Enum

class StopStatusEnum(str, Enum):
    PENDING = "Pending"
    SUCCEEDED = "Succeeded"

