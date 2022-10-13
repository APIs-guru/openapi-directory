from dataclasses import dataclass, field
from typing import Enum

class UpsertActionEnum(str, Enum):
    UPDATED = "UPDATED"
    APPENDED = "APPENDED"

