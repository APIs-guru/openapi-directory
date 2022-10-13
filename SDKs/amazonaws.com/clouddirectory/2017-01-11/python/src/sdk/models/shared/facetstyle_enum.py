from dataclasses import dataclass, field
from typing import Enum

class FacetStyleEnum(str, Enum):
    STATIC = "STATIC"
    DYNAMIC = "DYNAMIC"

