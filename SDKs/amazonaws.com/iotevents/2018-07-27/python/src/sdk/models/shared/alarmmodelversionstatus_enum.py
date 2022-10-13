from dataclasses import dataclass, field
from typing import Enum

class AlarmModelVersionStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    ACTIVATING = "ACTIVATING"
    INACTIVE = "INACTIVE"
    FAILED = "FAILED"

