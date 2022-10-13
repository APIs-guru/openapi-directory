from dataclasses import dataclass, field
from typing import Enum

class FieldTypeEnum(str, Enum):
    NUMBER = "Number"
    STRING = "String"
    BOOLEAN = "Boolean"

