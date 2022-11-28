from dataclasses import dataclass, field
from enum import Enum

class TaskExecutionStatusEnum(str, Enum):
    QUEUED = "QUEUED"
    LAUNCHING = "LAUNCHING"
    PREPARING = "PREPARING"
    TRANSFERRING = "TRANSFERRING"
    VERIFYING = "VERIFYING"
    SUCCESS = "SUCCESS"
    ERROR = "ERROR"

