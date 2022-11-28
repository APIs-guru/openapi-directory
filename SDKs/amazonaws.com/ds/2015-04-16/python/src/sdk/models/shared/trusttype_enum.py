from dataclasses import dataclass, field
from enum import Enum

class TrustTypeEnum(str, Enum):
    FOREST = "Forest"
    EXTERNAL = "External"

