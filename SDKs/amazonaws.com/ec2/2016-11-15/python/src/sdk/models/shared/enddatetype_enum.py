from dataclasses import dataclass, field
from enum import Enum

class EndDateTypeEnum(str, Enum):
    UNLIMITED = "unlimited"
    LIMITED = "limited"

