from dataclasses import dataclass, field
from enum import Enum

class FunctionStageEnum(str, Enum):
    DEVELOPMENT = "DEVELOPMENT"
    LIVE = "LIVE"

