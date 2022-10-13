from dataclasses import dataclass, field
from typing import Enum

class CertificateModeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    SNI_ONLY = "SNI_ONLY"

