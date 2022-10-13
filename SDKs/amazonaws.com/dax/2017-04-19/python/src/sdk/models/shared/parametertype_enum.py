from dataclasses import dataclass, field
from typing import Enum

class ParameterTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    NODE_TYPE_SPECIFIC = "NODE_TYPE_SPECIFIC"

