from dataclasses import dataclass, field
from enum import Enum

class FieldTypeEnum(str, Enum):
    NUMBER = "Number"
    STRING = "String"
    BOOLEAN = "Boolean"

