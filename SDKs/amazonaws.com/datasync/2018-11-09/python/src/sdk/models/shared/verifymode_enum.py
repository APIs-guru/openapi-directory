from dataclasses import dataclass, field
from enum import Enum

class VerifyModeEnum(str, Enum):
    POINT_IN_TIME_CONSISTENT = "POINT_IN_TIME_CONSISTENT"
    ONLY_FILES_TRANSFERRED = "ONLY_FILES_TRANSFERRED"
    NONE = "NONE"

