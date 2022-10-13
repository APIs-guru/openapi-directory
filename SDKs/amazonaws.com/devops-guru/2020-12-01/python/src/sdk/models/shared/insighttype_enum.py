from dataclasses import dataclass, field
from typing import Enum

class InsightTypeEnum(str, Enum):
    REACTIVE = "REACTIVE"
    PROACTIVE = "PROACTIVE"

