from dataclasses import dataclass, field
from enum import Enum

class ServerCertificateStatusEnum(str, Enum):
    INVALID = "INVALID"
    VALID = "VALID"

