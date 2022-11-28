from dataclasses import dataclass, field
from enum import Enum

class ApprovalModelEnum(str, Enum):
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"

