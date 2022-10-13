from dataclasses import dataclass, field
from typing import Enum

class ServerCertificateStatusEnum(str, Enum):
    INVALID = "INVALID"
    VALID = "VALID"

