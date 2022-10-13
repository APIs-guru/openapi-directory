from dataclasses import dataclass, field
from typing import Enum

class CaCertificateStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

