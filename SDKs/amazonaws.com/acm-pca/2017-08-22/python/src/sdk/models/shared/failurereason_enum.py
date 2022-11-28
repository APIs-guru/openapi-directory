from dataclasses import dataclass, field
from enum import Enum

class FailureReasonEnum(str, Enum):
    REQUEST_TIMED_OUT = "REQUEST_TIMED_OUT"
    UNSUPPORTED_ALGORITHM = "UNSUPPORTED_ALGORITHM"
    OTHER = "OTHER"

