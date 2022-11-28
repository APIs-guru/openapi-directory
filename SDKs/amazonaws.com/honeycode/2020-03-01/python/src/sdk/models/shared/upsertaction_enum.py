from dataclasses import dataclass, field
from enum import Enum

class UpsertActionEnum(str, Enum):
    UPDATED = "UPDATED"
    APPENDED = "APPENDED"

