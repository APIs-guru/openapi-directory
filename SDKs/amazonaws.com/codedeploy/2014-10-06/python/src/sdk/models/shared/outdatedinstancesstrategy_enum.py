from dataclasses import dataclass, field
from typing import Enum

class OutdatedInstancesStrategyEnum(str, Enum):
    UPDATE = "UPDATE"
    IGNORE = "IGNORE"

