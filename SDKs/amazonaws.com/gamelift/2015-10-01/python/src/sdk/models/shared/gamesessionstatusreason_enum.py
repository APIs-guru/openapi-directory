from dataclasses import dataclass, field
from enum import Enum

class GameSessionStatusReasonEnum(str, Enum):
    INTERRUPTED = "INTERRUPTED"

