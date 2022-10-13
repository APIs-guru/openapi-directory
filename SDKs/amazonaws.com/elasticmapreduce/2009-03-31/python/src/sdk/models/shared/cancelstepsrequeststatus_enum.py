from dataclasses import dataclass, field
from typing import Enum

class CancelStepsRequestStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    FAILED = "FAILED"

