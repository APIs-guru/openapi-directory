from dataclasses import dataclass, field
from typing import Enum

class TaskStatusEnum(str, Enum):
    FINISHED = "FINISHED"
    FAILED = "FAILED"
    FALSE = "FALSE"

