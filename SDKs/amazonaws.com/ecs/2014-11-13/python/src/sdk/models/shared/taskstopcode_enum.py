from dataclasses import dataclass, field
from typing import Enum

class TaskStopCodeEnum(str, Enum):
    TASK_FAILED_TO_START = "TaskFailedToStart"
    ESSENTIAL_CONTAINER_EXITED = "EssentialContainerExited"
    USER_INITIATED = "UserInitiated"

