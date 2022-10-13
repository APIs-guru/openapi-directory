from dataclasses import dataclass, field
from typing import Enum

class ServiceStatusEnum(str, Enum):
    CREATE_FAILED = "CREATE_FAILED"
    RUNNING = "RUNNING"
    DELETED = "DELETED"
    DELETE_FAILED = "DELETE_FAILED"
    PAUSED = "PAUSED"
    OPERATION_IN_PROGRESS = "OPERATION_IN_PROGRESS"

