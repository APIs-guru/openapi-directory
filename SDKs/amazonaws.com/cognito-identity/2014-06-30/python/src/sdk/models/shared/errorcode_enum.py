from dataclasses import dataclass, field
from typing import Enum

class ErrorCodeEnum(str, Enum):
    ACCESS_DENIED = "AccessDenied"
    INTERNAL_SERVER_ERROR = "InternalServerError"

