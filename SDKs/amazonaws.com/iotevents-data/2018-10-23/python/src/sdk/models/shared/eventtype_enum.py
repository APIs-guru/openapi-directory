from dataclasses import dataclass, field
from typing import Enum

class EventTypeEnum(str, Enum):
    STATE_CHANGE = "STATE_CHANGE"

