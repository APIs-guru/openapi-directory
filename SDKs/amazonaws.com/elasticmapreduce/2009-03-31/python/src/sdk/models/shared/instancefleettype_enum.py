from dataclasses import dataclass, field
from enum import Enum

class InstanceFleetTypeEnum(str, Enum):
    MASTER = "MASTER"
    CORE = "CORE"
    TASK = "TASK"

