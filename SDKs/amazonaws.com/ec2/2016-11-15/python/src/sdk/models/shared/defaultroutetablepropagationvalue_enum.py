from dataclasses import dataclass, field
from enum import Enum

class DefaultRouteTablePropagationValueEnum(str, Enum):
    ENABLE = "enable"
    DISABLE = "disable"

