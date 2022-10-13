from dataclasses import dataclass, field
from typing import Enum

class StageTransitionTypeEnum(str, Enum):
    INBOUND = "Inbound"
    OUTBOUND = "Outbound"

