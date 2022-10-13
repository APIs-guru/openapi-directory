from dataclasses import dataclass, field
from typing import Enum

class WorkerTypeEnum(str, Enum):
    STANDARD = "Standard"
    G_1_X = "G.1X"
    G_2_X = "G.2X"

