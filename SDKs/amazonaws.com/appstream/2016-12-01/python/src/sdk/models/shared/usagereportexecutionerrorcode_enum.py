from dataclasses import dataclass, field
from enum import Enum

class UsageReportExecutionErrorCodeEnum(str, Enum):
    RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND"
    ACCESS_DENIED = "ACCESS_DENIED"
    INTERNAL_SERVICE_ERROR = "INTERNAL_SERVICE_ERROR"

