from dataclasses import dataclass, field
from enum import Enum

class PersistentAppUIEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

