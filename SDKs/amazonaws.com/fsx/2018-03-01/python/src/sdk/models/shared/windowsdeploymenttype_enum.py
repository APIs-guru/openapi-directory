from dataclasses import dataclass, field
from typing import Enum

class WindowsDeploymentTypeEnum(str, Enum):
    MULTI_AZ_1 = "MULTI_AZ_1"
    SINGLE_AZ_1 = "SINGLE_AZ_1"
    SINGLE_AZ_2 = "SINGLE_AZ_2"

