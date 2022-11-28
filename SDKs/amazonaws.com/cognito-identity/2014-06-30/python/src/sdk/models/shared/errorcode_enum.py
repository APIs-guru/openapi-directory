from dataclasses import dataclass, field
from enum import Enum

class ErrorCodeEnum(str, Enum):
    ACCESS_DENIED = "AccessDenied"
    INTERNAL_SERVER_ERROR = "InternalServerError"

