from dataclasses import dataclass, field
from enum import Enum

class EncryptionModeValueEnum(str, Enum):
    SSE_S3 = "sse-s3"
    SSE_KMS = "sse-kms"

