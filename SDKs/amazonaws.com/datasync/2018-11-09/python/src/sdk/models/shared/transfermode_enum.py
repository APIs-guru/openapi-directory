from dataclasses import dataclass, field
from typing import Enum

class TransferModeEnum(str, Enum):
    CHANGED = "CHANGED"
    ALL = "ALL"

