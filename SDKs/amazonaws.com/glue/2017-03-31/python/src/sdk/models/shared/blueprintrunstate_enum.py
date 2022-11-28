from dataclasses import dataclass, field
from enum import Enum

class BlueprintRunStateEnum(str, Enum):
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    ROLLING_BACK = "ROLLING_BACK"

