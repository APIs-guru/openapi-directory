from dataclasses import dataclass, field
from enum import Enum

class StatusEnum(str, Enum):
    LATEST = "LATEST"
    STALE = "STALE"

