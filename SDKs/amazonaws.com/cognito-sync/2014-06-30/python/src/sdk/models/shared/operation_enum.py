from dataclasses import dataclass, field
from typing import Enum

class OperationEnum(str, Enum):
    REPLACE = "replace"
    REMOVE = "remove"

