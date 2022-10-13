from dataclasses import dataclass, field
from typing import Enum

class EncryptionTypeEnum(str, Enum):
    AES256 = "AES256"
    KMS = "KMS"

