from dataclasses import dataclass, field
from typing import Enum

class AttributeTypeEnum(str, Enum):
    STRING = "string"
    INTEGER = "integer"
    FLOAT = "float"
    TIMESTAMP = "timestamp"
    GEOLOCATION = "geolocation"

