from dataclasses import dataclass, field
from enum import Enum

class ReadWriteTypeEnum(str, Enum):
    READ_ONLY = "ReadOnly"
    WRITE_ONLY = "WriteOnly"
    ALL = "All"

