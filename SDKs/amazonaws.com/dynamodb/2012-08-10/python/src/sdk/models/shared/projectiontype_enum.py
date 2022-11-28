from dataclasses import dataclass, field
from enum import Enum

class ProjectionTypeEnum(str, Enum):
    ALL = "ALL"
    KEYS_ONLY = "KEYS_ONLY"
    INCLUDE = "INCLUDE"

