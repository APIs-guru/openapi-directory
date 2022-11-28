from dataclasses import dataclass, field
from enum import Enum

class RiskLevelTypeEnum(str, Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"

