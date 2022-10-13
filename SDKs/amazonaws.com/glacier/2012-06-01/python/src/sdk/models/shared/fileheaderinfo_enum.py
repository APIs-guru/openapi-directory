from dataclasses import dataclass, field
from typing import Enum

class FileHeaderInfoEnum(str, Enum):
    USE = "USE"
    IGNORE = "IGNORE"
    NONE = "NONE"

