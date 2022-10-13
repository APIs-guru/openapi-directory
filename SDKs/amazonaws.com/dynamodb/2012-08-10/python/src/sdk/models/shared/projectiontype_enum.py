from dataclasses import dataclass, field
from typing import Enum

class ProjectionTypeEnum(str, Enum):
    ALL = "ALL"
    KEYS_ONLY = "KEYS_ONLY"
    INCLUDE = "INCLUDE"

