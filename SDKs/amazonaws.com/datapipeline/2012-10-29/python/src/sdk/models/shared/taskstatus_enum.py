from dataclasses import dataclass, field
from enum import Enum

class TaskStatusEnum(str, Enum):
    FINISHED = "FINISHED"
    FAILED = "FAILED"
    FALSE = "FALSE"

