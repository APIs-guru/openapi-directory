from dataclasses import dataclass, field
from enum import Enum

class EventTypeEnum(str, Enum):
    STATE_CHANGE = "STATE_CHANGE"

