from dataclasses import dataclass, field
from enum import Enum

class VerificationStatusEnum(str, Enum):
    PENDING = "Pending"
    SUCCESS = "Success"
    FAILED = "Failed"
    TEMPORARY_FAILURE = "TemporaryFailure"
    NOT_STARTED = "NotStarted"

