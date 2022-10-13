from dataclasses import dataclass, field
from typing import Enum

class APICacheTypeEnum(str, Enum):
    T2_SMALL = "T2_SMALL"
    T2_MEDIUM = "T2_MEDIUM"
    R4_LARGE = "R4_LARGE"
    R4_XLARGE = "R4_XLARGE"
    R4_2_XLARGE = "R4_2XLARGE"
    R4_4_XLARGE = "R4_4XLARGE"
    R4_8_XLARGE = "R4_8XLARGE"
    SMALL = "SMALL"
    MEDIUM = "MEDIUM"
    LARGE = "LARGE"
    XLARGE = "XLARGE"
    LARGE_2_X = "LARGE_2X"
    LARGE_4_X = "LARGE_4X"
    LARGE_8_X = "LARGE_8X"
    LARGE_12_X = "LARGE_12X"

