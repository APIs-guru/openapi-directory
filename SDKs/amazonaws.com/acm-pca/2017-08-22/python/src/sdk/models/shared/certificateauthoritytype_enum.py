from dataclasses import dataclass, field
from enum import Enum

class CertificateAuthorityTypeEnum(str, Enum):
    ROOT = "ROOT"
    SUBORDINATE = "SUBORDINATE"

