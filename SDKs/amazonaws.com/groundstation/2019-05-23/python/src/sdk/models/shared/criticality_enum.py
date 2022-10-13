from dataclasses import dataclass, field
from typing import Enum

class CriticalityEnum(str, Enum):
    PREFERRED = "PREFERRED"
    REMOVED = "REMOVED"
    REQUIRED = "REQUIRED"

