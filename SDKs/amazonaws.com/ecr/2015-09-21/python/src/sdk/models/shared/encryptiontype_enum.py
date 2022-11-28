from dataclasses import dataclass, field
from enum import Enum

class EncryptionTypeEnum(str, Enum):
    AES256 = "AES256"
    KMS = "KMS"

