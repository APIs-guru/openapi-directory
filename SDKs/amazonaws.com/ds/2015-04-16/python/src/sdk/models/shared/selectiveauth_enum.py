from dataclasses import dataclass, field
from typing import Enum

class SelectiveAuthEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

