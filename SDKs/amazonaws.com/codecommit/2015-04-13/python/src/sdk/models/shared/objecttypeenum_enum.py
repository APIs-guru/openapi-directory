from dataclasses import dataclass, field
from enum import Enum

class ObjectTypeEnumEnum(str, Enum):
    FILE = "FILE"
    DIRECTORY = "DIRECTORY"
    GIT_LINK = "GIT_LINK"
    SYMBOLIC_LINK = "SYMBOLIC_LINK"

