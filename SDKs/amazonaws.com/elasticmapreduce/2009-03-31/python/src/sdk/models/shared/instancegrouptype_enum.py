from dataclasses import dataclass, field
from enum import Enum

class InstanceGroupTypeEnum(str, Enum):
    MASTER = "MASTER"
    CORE = "CORE"
    TASK = "TASK"

