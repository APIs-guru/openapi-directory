from dataclasses import dataclass, field
from enum import Enum

class MtimeEnum(str, Enum):
    NONE = "NONE"
    PRESERVE = "PRESERVE"

