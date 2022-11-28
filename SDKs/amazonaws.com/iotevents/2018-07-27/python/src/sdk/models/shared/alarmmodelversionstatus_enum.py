from dataclasses import dataclass, field
from enum import Enum

class AlarmModelVersionStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    ACTIVATING = "ACTIVATING"
    INACTIVE = "INACTIVE"
    FAILED = "FAILED"

