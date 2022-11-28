from dataclasses import dataclass, field
from enum import Enum

class InsightTypeEnum(str, Enum):
    REACTIVE = "REACTIVE"
    PROACTIVE = "PROACTIVE"

