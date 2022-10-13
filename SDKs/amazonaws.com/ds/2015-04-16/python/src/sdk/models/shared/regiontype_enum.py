from dataclasses import dataclass, field
from typing import Enum

class RegionTypeEnum(str, Enum):
    PRIMARY = "Primary"
    ADDITIONAL = "Additional"

