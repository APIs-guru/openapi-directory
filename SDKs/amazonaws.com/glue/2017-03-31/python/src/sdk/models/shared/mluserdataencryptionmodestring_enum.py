from dataclasses import dataclass, field
from typing import Enum

class MlUserDataEncryptionModeStringEnum(str, Enum):
    DISABLED = "DISABLED"
    SSE_KMS = "SSE-KMS"

