from dataclasses import dataclass, field
from typing import Enum

class FacetAttributeTypeEnum(str, Enum):
    STRING = "STRING"
    BINARY = "BINARY"
    BOOLEAN = "BOOLEAN"
    NUMBER = "NUMBER"
    DATETIME = "DATETIME"
    VARIANT = "VARIANT"

