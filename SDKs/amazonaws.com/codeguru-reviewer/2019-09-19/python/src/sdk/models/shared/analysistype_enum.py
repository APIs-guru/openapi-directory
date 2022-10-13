from dataclasses import dataclass, field
from typing import Enum

class AnalysisTypeEnum(str, Enum):
    SECURITY = "Security"
    CODE_QUALITY = "CodeQuality"

