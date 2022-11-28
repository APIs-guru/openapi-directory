from dataclasses import dataclass, field
from enum import Enum

class ReplaceRootVolumeTaskStateEnum(str, Enum):
    PENDING = "pending"
    IN_PROGRESS = "in-progress"
    FAILING = "failing"
    SUCCEEDED = "succeeded"
    FAILED = "failed"
    FAILED_DETACHED = "failed-detached"

