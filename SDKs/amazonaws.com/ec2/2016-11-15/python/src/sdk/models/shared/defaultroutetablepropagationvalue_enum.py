from dataclasses import dataclass, field
from typing import Enum

class DefaultRouteTablePropagationValueEnum(str, Enum):
    ENABLE = "enable"
    DISABLE = "disable"

