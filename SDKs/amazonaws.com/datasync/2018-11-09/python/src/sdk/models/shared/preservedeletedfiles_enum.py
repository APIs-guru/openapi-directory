from dataclasses import dataclass, field
from enum import Enum

class PreserveDeletedFilesEnum(str, Enum):
    PRESERVE = "PRESERVE"
    REMOVE = "REMOVE"

