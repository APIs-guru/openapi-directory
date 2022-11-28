from dataclasses import dataclass, field
from enum import Enum

class MatchmakingConfigurationStatusEnum(str, Enum):
    CANCELLED = "CANCELLED"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    PLACING = "PLACING"
    QUEUED = "QUEUED"
    REQUIRES_ACCEPTANCE = "REQUIRES_ACCEPTANCE"
    SEARCHING = "SEARCHING"
    TIMED_OUT = "TIMED_OUT"

