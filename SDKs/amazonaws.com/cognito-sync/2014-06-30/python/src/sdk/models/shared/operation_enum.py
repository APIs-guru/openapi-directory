from dataclasses import dataclass, field
from enum import Enum

class OperationEnum(str, Enum):
    REPLACE = "replace"
    REMOVE = "remove"

