from dataclasses import dataclass, field
from typing import Enum

class EfsTransitEncryptionEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

