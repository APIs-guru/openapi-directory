from dataclasses import dataclass, field
from enum import Enum

class TransferModeEnum(str, Enum):
    CHANGED = "CHANGED"
    ALL = "ALL"

