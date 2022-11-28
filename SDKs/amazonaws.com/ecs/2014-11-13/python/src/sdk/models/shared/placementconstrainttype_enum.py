from dataclasses import dataclass, field
from enum import Enum

class PlacementConstraintTypeEnum(str, Enum):
    DISTINCT_INSTANCE = "distinctInstance"
    MEMBER_OF = "memberOf"

