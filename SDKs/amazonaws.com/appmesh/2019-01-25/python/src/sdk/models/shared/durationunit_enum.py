from dataclasses import dataclass, field
from enum import Enum

class DurationUnitEnum(str, Enum):
    S = "s"
    MS = "ms"

