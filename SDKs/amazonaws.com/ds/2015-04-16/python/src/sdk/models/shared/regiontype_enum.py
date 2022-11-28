from dataclasses import dataclass, field
from enum import Enum

class RegionTypeEnum(str, Enum):
    PRIMARY = "Primary"
    ADDITIONAL = "Additional"

