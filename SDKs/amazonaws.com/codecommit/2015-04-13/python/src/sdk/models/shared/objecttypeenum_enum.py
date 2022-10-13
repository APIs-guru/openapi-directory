from dataclasses import dataclass, field
from typing import Enum

class ObjectTypeEnumEnum(str, Enum):
    FILE = "FILE"
    DIRECTORY = "DIRECTORY"
    GIT_LINK = "GIT_LINK"
    SYMBOLIC_LINK = "SYMBOLIC_LINK"

