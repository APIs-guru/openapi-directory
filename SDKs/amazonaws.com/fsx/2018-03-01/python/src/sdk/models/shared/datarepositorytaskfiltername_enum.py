from dataclasses import dataclass, field
from enum import Enum

class DataRepositoryTaskFilterNameEnum(str, Enum):
    FILE_SYSTEM_ID = "file-system-id"
    TASK_LIFECYCLE = "task-lifecycle"

