from dataclasses import dataclass, field
from enum import Enum

class SelectEnum(str, Enum):
    ALL_ATTRIBUTES = "ALL_ATTRIBUTES"
    ALL_PROJECTED_ATTRIBUTES = "ALL_PROJECTED_ATTRIBUTES"
    SPECIFIC_ATTRIBUTES = "SPECIFIC_ATTRIBUTES"
    COUNT = "COUNT"

