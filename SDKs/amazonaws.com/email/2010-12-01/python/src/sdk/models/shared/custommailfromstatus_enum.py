from dataclasses import dataclass, field
from enum import Enum

class CustomMailFromStatusEnum(str, Enum):
    PENDING = "Pending"
    SUCCESS = "Success"
    FAILED = "Failed"
    TEMPORARY_FAILURE = "TemporaryFailure"

