from dataclasses import dataclass, field
from typing import Enum

class StageRetryModeEnum(str, Enum):
    FAILED_ACTIONS = "FAILED_ACTIONS"

