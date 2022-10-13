from dataclasses import dataclass, field
from typing import Enum

class S3SseAlgorithmEnum(str, Enum):
    AES256 = "AES256"
    KMS = "KMS"

