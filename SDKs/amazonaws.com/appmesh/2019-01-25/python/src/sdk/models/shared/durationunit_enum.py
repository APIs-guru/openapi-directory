from dataclasses import dataclass, field
from typing import Enum

class DurationUnitEnum(str, Enum):
    S = "s"
    MS = "ms"

