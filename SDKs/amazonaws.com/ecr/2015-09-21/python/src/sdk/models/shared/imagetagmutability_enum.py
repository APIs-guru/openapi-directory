from dataclasses import dataclass, field
from typing import Enum

class ImageTagMutabilityEnum(str, Enum):
    MUTABLE = "MUTABLE"
    IMMUTABLE = "IMMUTABLE"

