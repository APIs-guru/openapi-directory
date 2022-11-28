from dataclasses import dataclass, field
from enum import Enum

class MoveStatusEnum(str, Enum):
    MOVING_TO_VPC = "movingToVpc"
    RESTORING_TO_CLASSIC = "restoringToClassic"

