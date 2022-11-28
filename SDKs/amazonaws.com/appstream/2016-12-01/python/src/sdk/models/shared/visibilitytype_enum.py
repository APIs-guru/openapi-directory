from dataclasses import dataclass, field
from enum import Enum

class VisibilityTypeEnum(str, Enum):
    PUBLIC = "PUBLIC"
    PRIVATE = "PRIVATE"
    SHARED = "SHARED"

