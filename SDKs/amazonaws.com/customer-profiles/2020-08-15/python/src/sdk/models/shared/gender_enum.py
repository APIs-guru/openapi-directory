from dataclasses import dataclass, field
from enum import Enum

class GenderEnum(str, Enum):
    MALE = "MALE"
    FEMALE = "FEMALE"
    UNSPECIFIED = "UNSPECIFIED"

