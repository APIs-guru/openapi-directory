from dataclasses import dataclass, field
from enum import Enum

class CertificateTypeEnum(str, Enum):
    DISABLED = "DISABLED"
    GENERATED = "GENERATED"

