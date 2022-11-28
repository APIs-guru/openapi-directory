from dataclasses import dataclass, field
from enum import Enum

class StageTransitionTypeEnum(str, Enum):
    INBOUND = "Inbound"
    OUTBOUND = "Outbound"

