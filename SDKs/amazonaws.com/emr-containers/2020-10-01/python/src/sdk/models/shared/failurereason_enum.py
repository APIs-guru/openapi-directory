from dataclasses import dataclass, field
from typing import Enum

class FailureReasonEnum(str, Enum):
    INTERNAL_ERROR = "INTERNAL_ERROR"
    USER_ERROR = "USER_ERROR"
    VALIDATION_ERROR = "VALIDATION_ERROR"
    CLUSTER_UNAVAILABLE = "CLUSTER_UNAVAILABLE"

