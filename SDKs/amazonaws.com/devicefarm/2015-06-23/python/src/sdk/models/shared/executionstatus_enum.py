from dataclasses import dataclass, field
from enum import Enum

class ExecutionStatusEnum(str, Enum):
    PENDING = "PENDING"
    PENDING_CONCURRENCY = "PENDING_CONCURRENCY"
    PENDING_DEVICE = "PENDING_DEVICE"
    PROCESSING = "PROCESSING"
    SCHEDULING = "SCHEDULING"
    PREPARING = "PREPARING"
    RUNNING = "RUNNING"
    COMPLETED = "COMPLETED"
    STOPPING = "STOPPING"

