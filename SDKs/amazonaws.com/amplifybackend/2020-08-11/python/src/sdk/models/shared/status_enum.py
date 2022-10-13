from dataclasses import dataclass, field
from typing import Enum

class StatusEnum(str, Enum):
    LATEST = "LATEST"
    STALE = "STALE"

