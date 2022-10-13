from dataclasses import dataclass, field
from typing import Enum

class TrustTypeEnum(str, Enum):
    FOREST = "Forest"
    EXTERNAL = "External"

