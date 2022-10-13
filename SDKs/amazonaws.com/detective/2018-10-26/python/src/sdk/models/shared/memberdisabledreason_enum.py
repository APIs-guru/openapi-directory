from dataclasses import dataclass, field
from typing import Enum

class MemberDisabledReasonEnum(str, Enum):
    VOLUME_TOO_HIGH = "VOLUME_TOO_HIGH"
    VOLUME_UNKNOWN = "VOLUME_UNKNOWN"

