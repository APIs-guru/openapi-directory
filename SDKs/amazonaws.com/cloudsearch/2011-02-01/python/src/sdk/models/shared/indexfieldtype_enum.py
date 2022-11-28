from dataclasses import dataclass, field
from enum import Enum

class IndexFieldTypeEnum(str, Enum):
    UINT = "uint"
    LITERAL = "literal"
    TEXT = "text"

