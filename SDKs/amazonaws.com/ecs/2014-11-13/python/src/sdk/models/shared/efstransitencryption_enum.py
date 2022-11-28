from dataclasses import dataclass, field
from enum import Enum

class EfsTransitEncryptionEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

