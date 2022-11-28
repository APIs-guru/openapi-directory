from dataclasses import dataclass, field
from enum import Enum

class LustreDeploymentTypeEnum(str, Enum):
    SCRATCH_1 = "SCRATCH_1"
    SCRATCH_2 = "SCRATCH_2"
    PERSISTENT_1 = "PERSISTENT_1"

