from dataclasses import dataclass, field
from enum import Enum

class AllocationStateEnum(str, Enum):
    AVAILABLE = "available"
    UNDER_ASSESSMENT = "under-assessment"
    PERMANENT_FAILURE = "permanent-failure"
    RELEASED = "released"
    RELEASED_PERMANENT_FAILURE = "released-permanent-failure"
    PENDING = "pending"

