from dataclasses import dataclass, field
from typing import Enum

class AuthMechanismValueEnum(str, Enum):
    DEFAULT = "default"
    MONGODB_CR = "mongodb_cr"
    SCRAM_SHA_1 = "scram_sha_1"

