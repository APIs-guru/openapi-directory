from dataclasses import dataclass, field
from typing import Enum

class InstanceRoleTypeEnum(str, Enum):
    MASTER = "MASTER"
    CORE = "CORE"
    TASK = "TASK"

