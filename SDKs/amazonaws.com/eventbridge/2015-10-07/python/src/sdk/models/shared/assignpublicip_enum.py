from dataclasses import dataclass, field
from enum import Enum

class AssignPublicIPEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

