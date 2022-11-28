from dataclasses import dataclass, field
from enum import Enum

class InstanceRoleTypeEnum(str, Enum):
    MASTER = "MASTER"
    CORE = "CORE"
    TASK = "TASK"

