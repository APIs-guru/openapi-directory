from dataclasses import dataclass, field
from typing import Enum

class CertificateTypeEnum(str, Enum):
    DISABLED = "DISABLED"
    GENERATED = "GENERATED"

