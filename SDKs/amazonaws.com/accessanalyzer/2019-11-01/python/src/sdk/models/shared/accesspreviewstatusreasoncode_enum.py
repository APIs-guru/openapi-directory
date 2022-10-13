from dataclasses import dataclass, field
from typing import Enum

class AccessPreviewStatusReasonCodeEnum(str, Enum):
    INTERNAL_ERROR = "INTERNAL_ERROR"
    INVALID_CONFIGURATION = "INVALID_CONFIGURATION"

