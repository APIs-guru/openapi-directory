from dataclasses import dataclass, field
from typing import Enum

class CertificateAuthorityTypeEnum(str, Enum):
    ROOT = "ROOT"
    SUBORDINATE = "SUBORDINATE"

