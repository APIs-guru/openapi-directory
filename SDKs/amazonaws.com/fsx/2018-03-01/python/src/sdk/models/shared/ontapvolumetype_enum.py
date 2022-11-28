from dataclasses import dataclass, field
from enum import Enum

class OntapVolumeTypeEnum(str, Enum):
    RW = "RW"
    DP = "DP"
    LS = "LS"

