from dataclasses import dataclass, field
from enum import Enum

class EncryptionOptionEnum(str, Enum):
    SSE_S3 = "SSE_S3"
    SSE_KMS = "SSE_KMS"
    CSE_KMS = "CSE_KMS"

