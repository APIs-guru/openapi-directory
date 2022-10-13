from dataclasses import dataclass, field
from typing import Enum

class AngleUnitsEnum(str, Enum):
    DEGREE_ANGLE = "DEGREE_ANGLE"
    RADIAN = "RADIAN"

