from dataclasses import dataclass, field
from typing import Enum

class PrefixTypeEnum(str, Enum):
    FILENAME = "FILENAME"
    PATH = "PATH"
    PATH_AND_FILENAME = "PATH_AND_FILENAME"

