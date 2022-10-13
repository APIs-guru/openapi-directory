from dataclasses import dataclass, field
from typing import Enum

class ComputeTypeEnum(str, Enum):
    ACU_1 = "ACU_1"
    ACU_2 = "ACU_2"

