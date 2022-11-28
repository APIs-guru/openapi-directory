from dataclasses import dataclass, field
from enum import Enum

class InstanceInterruptionBehaviorEnum(str, Enum):
    HIBERNATE = "hibernate"
    STOP = "stop"
    TERMINATE = "terminate"

