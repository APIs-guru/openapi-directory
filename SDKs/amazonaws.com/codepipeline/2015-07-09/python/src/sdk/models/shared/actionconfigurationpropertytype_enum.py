from dataclasses import dataclass, field
from enum import Enum

class ActionConfigurationPropertyTypeEnum(str, Enum):
    STRING = "String"
    NUMBER = "Number"
    BOOLEAN = "Boolean"

