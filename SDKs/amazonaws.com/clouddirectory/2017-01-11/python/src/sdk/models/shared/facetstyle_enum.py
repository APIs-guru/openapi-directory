from dataclasses import dataclass, field
from enum import Enum

class FacetStyleEnum(str, Enum):
    STATIC = "STATIC"
    DYNAMIC = "DYNAMIC"

