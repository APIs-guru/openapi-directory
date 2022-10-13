from dataclasses import dataclass, field
from typing import Enum

class InstanceFleetTypeEnum(str, Enum):
    MASTER = "MASTER"
    CORE = "CORE"
    TASK = "TASK"

