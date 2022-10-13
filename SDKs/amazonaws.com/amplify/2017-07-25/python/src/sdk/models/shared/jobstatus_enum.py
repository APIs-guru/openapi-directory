from dataclasses import dataclass, field
from typing import Enum

class JobStatusEnum(str, Enum):
    PENDING = "PENDING"
    PROVISIONING = "PROVISIONING"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    SUCCEED = "SUCCEED"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"

