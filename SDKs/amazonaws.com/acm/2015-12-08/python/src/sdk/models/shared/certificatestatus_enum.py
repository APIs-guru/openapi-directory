from dataclasses import dataclass, field
from typing import Enum

class CertificateStatusEnum(str, Enum):
    PENDING_VALIDATION = "PENDING_VALIDATION"
    ISSUED = "ISSUED"
    INACTIVE = "INACTIVE"
    EXPIRED = "EXPIRED"
    VALIDATION_TIMED_OUT = "VALIDATION_TIMED_OUT"
    REVOKED = "REVOKED"
    FAILED = "FAILED"

