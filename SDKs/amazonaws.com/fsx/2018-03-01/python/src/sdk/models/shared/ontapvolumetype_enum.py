from dataclasses import dataclass, field
from typing import Enum

class OntapVolumeTypeEnum(str, Enum):
    RW = "RW"
    DP = "DP"
    LS = "LS"

