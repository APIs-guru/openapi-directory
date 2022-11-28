from dataclasses import dataclass, field
from enum import Enum

class GameServerUtilizationStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    UTILIZED = "UTILIZED"

