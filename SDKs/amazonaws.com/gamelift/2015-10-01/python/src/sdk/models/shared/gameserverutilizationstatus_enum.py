from dataclasses import dataclass, field
from typing import Enum

class GameServerUtilizationStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    UTILIZED = "UTILIZED"

