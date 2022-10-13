from dataclasses import dataclass, field
from typing import Enum

class InstanceGroupTypeEnum(str, Enum):
    MASTER = "MASTER"
    CORE = "CORE"
    TASK = "TASK"

