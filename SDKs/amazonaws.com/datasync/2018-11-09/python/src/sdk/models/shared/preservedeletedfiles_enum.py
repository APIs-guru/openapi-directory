from dataclasses import dataclass, field
from typing import Enum

class PreserveDeletedFilesEnum(str, Enum):
    PRESERVE = "PRESERVE"
    REMOVE = "REMOVE"

