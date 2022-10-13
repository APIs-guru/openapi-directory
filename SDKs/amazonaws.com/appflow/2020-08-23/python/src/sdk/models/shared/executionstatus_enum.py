from dataclasses import dataclass, field
from typing import Enum

class ExecutionStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    SUCCESSFUL = "Successful"
    ERROR = "Error"

