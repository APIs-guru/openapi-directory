from dataclasses import dataclass, field
from enum import Enum

class S3SseAlgorithmEnum(str, Enum):
    AES256 = "AES256"
    KMS = "KMS"

