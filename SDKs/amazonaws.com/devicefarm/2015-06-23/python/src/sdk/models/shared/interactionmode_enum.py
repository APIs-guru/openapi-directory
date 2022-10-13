from dataclasses import dataclass, field
from typing import Enum

class InteractionModeEnum(str, Enum):
    INTERACTIVE = "INTERACTIVE"
    NO_VIDEO = "NO_VIDEO"
    VIDEO_ONLY = "VIDEO_ONLY"

