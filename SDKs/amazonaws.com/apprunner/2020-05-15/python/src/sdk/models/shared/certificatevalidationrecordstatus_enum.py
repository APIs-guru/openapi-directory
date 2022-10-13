from dataclasses import dataclass, field
from typing import Enum

class CertificateValidationRecordStatusEnum(str, Enum):
    PENDING_VALIDATION = "PENDING_VALIDATION"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

