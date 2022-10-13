from dataclasses import dataclass, field
from typing import Enum

class JobBookmarksEncryptionModeEnum(str, Enum):
    DISABLED = "DISABLED"
    CSE_KMS = "CSE-KMS"

