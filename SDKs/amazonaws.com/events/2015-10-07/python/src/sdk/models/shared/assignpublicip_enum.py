from dataclasses import dataclass, field
from typing import Enum

class AssignPublicIPEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

