from dataclasses import dataclass, field
from enum import Enum

class ScheduleStateEnum(str, Enum):
    SCHEDULED = "SCHEDULED"
    NOT_SCHEDULED = "NOT_SCHEDULED"
    TRANSITIONING = "TRANSITIONING"

