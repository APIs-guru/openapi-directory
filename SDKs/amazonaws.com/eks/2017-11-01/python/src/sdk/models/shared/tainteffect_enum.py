from dataclasses import dataclass, field
from enum import Enum

class TaintEffectEnum(str, Enum):
    NO_SCHEDULE = "NO_SCHEDULE"
    NO_EXECUTE = "NO_EXECUTE"
    PREFER_NO_SCHEDULE = "PREFER_NO_SCHEDULE"

