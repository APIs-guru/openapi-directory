from dataclasses import dataclass, field
from enum import Enum

class StatusEnum(str, Enum):
    MOVE_IN_PROGRESS = "MoveInProgress"
    IN_VPC = "InVpc"
    IN_CLASSIC = "InClassic"

