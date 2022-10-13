from dataclasses import dataclass, field
from typing import Enum

class ActionConfigurationPropertyTypeEnum(str, Enum):
    STRING = "String"
    NUMBER = "Number"
    BOOLEAN = "Boolean"

