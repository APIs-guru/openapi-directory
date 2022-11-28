from dataclasses import dataclass, field
from enum import Enum

class MembershipTypeEnum(str, Enum):
    STATIC = "static"
    IGMP = "igmp"

