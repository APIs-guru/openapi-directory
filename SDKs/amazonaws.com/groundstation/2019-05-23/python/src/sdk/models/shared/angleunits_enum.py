from dataclasses import dataclass, field
from enum import Enum

class AngleUnitsEnum(str, Enum):
    DEGREE_ANGLE = "DEGREE_ANGLE"
    RADIAN = "RADIAN"

