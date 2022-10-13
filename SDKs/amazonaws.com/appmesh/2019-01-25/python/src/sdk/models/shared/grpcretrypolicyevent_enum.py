from dataclasses import dataclass, field
from typing import Enum

class GrpcRetryPolicyEventEnum(str, Enum):
    CANCELLED = "cancelled"
    DEADLINE_EXCEEDED = "deadline-exceeded"
    INTERNAL = "internal"
    RESOURCE_EXHAUSTED = "resource-exhausted"
    UNAVAILABLE = "unavailable"

