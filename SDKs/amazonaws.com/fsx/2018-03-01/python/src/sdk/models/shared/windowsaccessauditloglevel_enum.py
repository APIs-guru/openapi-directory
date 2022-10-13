from dataclasses import dataclass, field
from typing import Enum

class WindowsAccessAuditLogLevelEnum(str, Enum):
    DISABLED = "DISABLED"
    SUCCESS_ONLY = "SUCCESS_ONLY"
    FAILURE_ONLY = "FAILURE_ONLY"
    SUCCESS_AND_FAILURE = "SUCCESS_AND_FAILURE"

