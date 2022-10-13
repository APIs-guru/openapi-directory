from dataclasses import dataclass, field
from typing import Enum

class MtimeEnum(str, Enum):
    NONE = "NONE"
    PRESERVE = "PRESERVE"

