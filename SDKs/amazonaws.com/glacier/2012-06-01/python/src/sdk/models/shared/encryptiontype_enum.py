from dataclasses import dataclass, field
from enum import Enum

class EncryptionTypeEnum(str, Enum):
    AWS_KMS = "aws:kms"
    AES256 = "AES256"

