from dataclasses import dataclass, field
from enum import Enum

class FacetAttributeTypeEnum(str, Enum):
    STRING = "STRING"
    BINARY = "BINARY"
    BOOLEAN = "BOOLEAN"
    NUMBER = "NUMBER"
    DATETIME = "DATETIME"

