from dataclasses import dataclass, field
from enum import Enum

class CertificateAuthorityStatusEnum(str, Enum):
    CREATING = "CREATING"
    PENDING_CERTIFICATE = "PENDING_CERTIFICATE"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"
    DISABLED = "DISABLED"
    EXPIRED = "EXPIRED"
    FAILED = "FAILED"

