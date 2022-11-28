from dataclasses import dataclass, field
from enum import Enum

class FailedItemErrorCodeEnum(str, Enum):
    INVALID_ARN = "INVALID_ARN"
    DUPLICATE_ARN = "DUPLICATE_ARN"
    ITEM_DOES_NOT_EXIST = "ITEM_DOES_NOT_EXIST"
    ACCESS_DENIED = "ACCESS_DENIED"
    LIMIT_EXCEEDED = "LIMIT_EXCEEDED"
    INTERNAL_ERROR = "INTERNAL_ERROR"

