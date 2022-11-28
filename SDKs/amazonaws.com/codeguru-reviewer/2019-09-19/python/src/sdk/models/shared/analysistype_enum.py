from dataclasses import dataclass, field
from enum import Enum

class AnalysisTypeEnum(str, Enum):
    SECURITY = "Security"
    CODE_QUALITY = "CodeQuality"

