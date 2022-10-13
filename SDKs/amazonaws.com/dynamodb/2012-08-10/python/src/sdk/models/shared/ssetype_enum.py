from dataclasses import dataclass, field
from typing import Enum

class SseTypeEnum(str, Enum):
    AES256 = "AES256"
    KMS = "KMS"

