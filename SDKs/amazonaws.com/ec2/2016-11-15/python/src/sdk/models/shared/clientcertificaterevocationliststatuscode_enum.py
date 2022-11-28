from dataclasses import dataclass, field
from enum import Enum

class ClientCertificateRevocationListStatusCodeEnum(str, Enum):
    PENDING = "pending"
    ACTIVE = "active"

