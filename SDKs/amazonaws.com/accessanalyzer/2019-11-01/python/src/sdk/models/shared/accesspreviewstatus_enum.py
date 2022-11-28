from dataclasses import dataclass, field
from enum import Enum

class AccessPreviewStatusEnum(str, Enum):
    COMPLETED = "COMPLETED"
    CREATING = "CREATING"
    FAILED = "FAILED"

