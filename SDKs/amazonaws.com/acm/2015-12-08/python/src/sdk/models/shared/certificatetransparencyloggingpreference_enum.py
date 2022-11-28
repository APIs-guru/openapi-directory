from dataclasses import dataclass, field
from enum import Enum

class CertificateTransparencyLoggingPreferenceEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

