from dataclasses import dataclass, field
from enum import Enum

class RenewalStatusEnum(str, Enum):
    PENDING_AUTO_RENEWAL = "PENDING_AUTO_RENEWAL"
    PENDING_VALIDATION = "PENDING_VALIDATION"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

