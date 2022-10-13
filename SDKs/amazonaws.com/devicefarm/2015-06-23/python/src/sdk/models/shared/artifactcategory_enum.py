from dataclasses import dataclass, field
from typing import Enum

class ArtifactCategoryEnum(str, Enum):
    SCREENSHOT = "SCREENSHOT"
    FILE = "FILE"
    LOG = "LOG"

