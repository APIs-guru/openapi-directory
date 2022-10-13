from dataclasses import dataclass, field
from typing import Enum

class ArrayJobDependencyEnum(str, Enum):
    N_TO_N = "N_TO_N"
    SEQUENTIAL = "SEQUENTIAL"

