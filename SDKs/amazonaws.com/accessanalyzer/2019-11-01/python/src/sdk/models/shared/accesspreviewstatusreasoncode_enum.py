from dataclasses import dataclass, field
from enum import Enum

class AccessPreviewStatusReasonCodeEnum(str, Enum):
    INTERNAL_ERROR = "INTERNAL_ERROR"
    INVALID_CONFIGURATION = "INVALID_CONFIGURATION"

