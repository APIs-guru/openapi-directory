from dataclasses import dataclass, field
from enum import Enum

class CriticalityEnum(str, Enum):
    PREFERRED = "PREFERRED"
    REMOVED = "REMOVED"
    REQUIRED = "REQUIRED"

