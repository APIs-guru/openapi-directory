from dataclasses import dataclass, field
from typing import Enum

class RiskLevelTypeEnum(str, Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"

