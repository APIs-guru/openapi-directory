from dataclasses import dataclass, field
from typing import Enum

class TriggerTypeEnum(str, Enum):
    SNOOZE_TIMEOUT = "SNOOZE_TIMEOUT"

