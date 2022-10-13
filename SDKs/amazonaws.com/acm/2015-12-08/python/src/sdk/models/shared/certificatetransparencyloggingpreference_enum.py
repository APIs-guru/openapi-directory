from dataclasses import dataclass, field
from typing import Enum

class CertificateTransparencyLoggingPreferenceEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

