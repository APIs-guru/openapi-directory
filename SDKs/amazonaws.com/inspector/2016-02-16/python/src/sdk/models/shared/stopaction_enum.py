from dataclasses import dataclass, field
from enum import Enum

class StopActionEnum(str, Enum):
    START_EVALUATION = "START_EVALUATION"
    SKIP_EVALUATION = "SKIP_EVALUATION"

