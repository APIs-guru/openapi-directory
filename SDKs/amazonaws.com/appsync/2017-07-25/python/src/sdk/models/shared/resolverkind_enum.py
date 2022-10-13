from dataclasses import dataclass, field
from typing import Enum

class ResolverKindEnum(str, Enum):
    UNIT = "UNIT"
    PIPELINE = "PIPELINE"

