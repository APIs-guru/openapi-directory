from dataclasses import dataclass, field
from enum import Enum

class DNSNameStateEnum(str, Enum):
    PENDING_VERIFICATION = "pendingVerification"
    VERIFIED = "verified"
    FAILED = "failed"

