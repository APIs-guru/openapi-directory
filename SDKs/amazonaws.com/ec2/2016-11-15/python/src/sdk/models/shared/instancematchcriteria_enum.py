from dataclasses import dataclass, field
from enum import Enum

class InstanceMatchCriteriaEnum(str, Enum):
    OPEN = "open"
    TARGETED = "targeted"

