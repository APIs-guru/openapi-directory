from dataclasses import dataclass, field
from enum import Enum

class ScanStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETE = "COMPLETE"
    FAILED = "FAILED"

