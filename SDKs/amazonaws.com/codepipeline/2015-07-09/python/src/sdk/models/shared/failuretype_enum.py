from dataclasses import dataclass, field
from typing import Enum

class FailureTypeEnum(str, Enum):
    JOB_FAILED = "JobFailed"
    CONFIGURATION_ERROR = "ConfigurationError"
    PERMISSION_ERROR = "PermissionError"
    REVISION_OUT_OF_SYNC = "RevisionOutOfSync"
    REVISION_UNAVAILABLE = "RevisionUnavailable"
    SYSTEM_UNAVAILABLE = "SystemUnavailable"

