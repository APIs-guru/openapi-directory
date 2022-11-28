from dataclasses import dataclass, field
from enum import Enum

class SelectiveAuthEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

