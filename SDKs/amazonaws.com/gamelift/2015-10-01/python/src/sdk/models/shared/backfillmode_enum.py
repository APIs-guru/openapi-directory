from dataclasses import dataclass, field
from typing import Enum

class BackfillModeEnum(str, Enum):
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"

