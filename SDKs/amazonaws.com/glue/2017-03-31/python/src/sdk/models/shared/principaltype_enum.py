from dataclasses import dataclass, field
from enum import Enum

class PrincipalTypeEnum(str, Enum):
    USER = "USER"
    ROLE = "ROLE"
    GROUP = "GROUP"

