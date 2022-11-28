from dataclasses import dataclass, field
from enum import Enum

class StatusTypeEnum(str, Enum):
    PASSED = "passed"
    FAILED = "failed"
    INSUFFICIENT_DATA = "insufficient-data"
    INITIALIZING = "initializing"

