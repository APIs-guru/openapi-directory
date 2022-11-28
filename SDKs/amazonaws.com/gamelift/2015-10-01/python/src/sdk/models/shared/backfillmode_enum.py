from dataclasses import dataclass, field
from enum import Enum

class BackfillModeEnum(str, Enum):
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"

