from dataclasses import dataclass, field
from enum import Enum

class ConfigurationOptionValueTypeEnum(str, Enum):
    SCALAR = "Scalar"
    LIST = "List"

