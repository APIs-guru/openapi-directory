from dataclasses import dataclass, field
from enum import Enum

class ResolverKindEnum(str, Enum):
    UNIT = "UNIT"
    PIPELINE = "PIPELINE"

