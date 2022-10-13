from dataclasses import dataclass, field
from typing import Enum

class PersistentAppUIEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

