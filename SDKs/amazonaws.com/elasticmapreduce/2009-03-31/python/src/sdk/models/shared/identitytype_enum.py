from dataclasses import dataclass, field
from enum import Enum

class IdentityTypeEnum(str, Enum):
    USER = "USER"
    GROUP = "GROUP"

