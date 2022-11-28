from dataclasses import dataclass, field
from enum import Enum

class TaskRunSortColumnTypeEnum(str, Enum):
    TASK_RUN_TYPE = "TASK_RUN_TYPE"
    STATUS = "STATUS"
    STARTED = "STARTED"

