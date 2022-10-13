from dataclasses import dataclass, field
from typing import Enum

class PlacementConstraintTypeEnum(str, Enum):
    DISTINCT_INSTANCE = "distinctInstance"
    MEMBER_OF = "memberOf"

