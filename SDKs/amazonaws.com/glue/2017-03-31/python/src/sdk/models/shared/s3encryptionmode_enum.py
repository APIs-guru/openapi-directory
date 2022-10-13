from dataclasses import dataclass, field
from typing import Enum

class S3EncryptionModeEnum(str, Enum):
    DISABLED = "DISABLED"
    SSE_KMS = "SSE-KMS"
    SSE_S3 = "SSE-S3"

