from dataclasses import dataclass, field
from typing import Enum

class IdentityTypeEnum(str, Enum):
    USER = "USER"
    GROUP = "GROUP"

