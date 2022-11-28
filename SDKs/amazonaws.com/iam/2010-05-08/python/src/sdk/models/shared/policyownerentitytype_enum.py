from dataclasses import dataclass, field
from enum import Enum

class PolicyOwnerEntityTypeEnum(str, Enum):
    USER = "USER"
    ROLE = "ROLE"
    GROUP = "GROUP"

