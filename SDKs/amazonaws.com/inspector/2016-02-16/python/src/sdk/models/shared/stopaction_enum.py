from dataclasses import dataclass, field
from typing import Enum

class StopActionEnum(str, Enum):
    START_EVALUATION = "START_EVALUATION"
    SKIP_EVALUATION = "SKIP_EVALUATION"

