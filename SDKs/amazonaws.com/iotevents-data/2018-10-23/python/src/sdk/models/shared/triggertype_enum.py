from dataclasses import dataclass, field
from enum import Enum

class TriggerTypeEnum(str, Enum):
    SNOOZE_TIMEOUT = "SNOOZE_TIMEOUT"

