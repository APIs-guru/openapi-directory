from dataclasses import dataclass, field
from enum import Enum

class EbsEncryptionSupportEnum(str, Enum):
    UNSUPPORTED = "unsupported"
    SUPPORTED = "supported"

