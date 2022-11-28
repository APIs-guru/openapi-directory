from dataclasses import dataclass, field
from enum import Enum

class FileHeaderInfoEnum(str, Enum):
    USE = "USE"
    IGNORE = "IGNORE"
    NONE = "NONE"

