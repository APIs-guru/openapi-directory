from dataclasses import dataclass, field
from typing import Enum

class PrincipalTypeEnum(str, Enum):
    USER = "USER"
    ROLE = "ROLE"
    GROUP = "GROUP"

