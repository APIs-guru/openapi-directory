from dataclasses import dataclass, field
from enum import Enum

class CertificateModeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    SNI_ONLY = "SNI_ONLY"

