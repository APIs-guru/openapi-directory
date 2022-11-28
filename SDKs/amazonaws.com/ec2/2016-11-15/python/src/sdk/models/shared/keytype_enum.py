from dataclasses import dataclass, field
from enum import Enum

class KeyTypeEnum(str, Enum):
    RSA = "rsa"
    ED25519 = "ed25519"

