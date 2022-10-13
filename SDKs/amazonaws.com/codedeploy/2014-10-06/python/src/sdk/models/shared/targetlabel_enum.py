from dataclasses import dataclass, field
from typing import Enum

class TargetLabelEnum(str, Enum):
    BLUE = "Blue"
    GREEN = "Green"

