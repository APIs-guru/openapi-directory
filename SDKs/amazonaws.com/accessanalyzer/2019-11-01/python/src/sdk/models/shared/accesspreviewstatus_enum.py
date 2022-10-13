from dataclasses import dataclass, field
from typing import Enum

class AccessPreviewStatusEnum(str, Enum):
    COMPLETED = "COMPLETED"
    CREATING = "CREATING"
    FAILED = "FAILED"

