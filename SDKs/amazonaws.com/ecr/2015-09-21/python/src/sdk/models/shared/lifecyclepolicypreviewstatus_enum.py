from dataclasses import dataclass, field
from typing import Enum

class LifecyclePolicyPreviewStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETE = "COMPLETE"
    EXPIRED = "EXPIRED"
    FAILED = "FAILED"

