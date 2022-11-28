from dataclasses import dataclass, field
from enum import Enum

class CaCertificateStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

