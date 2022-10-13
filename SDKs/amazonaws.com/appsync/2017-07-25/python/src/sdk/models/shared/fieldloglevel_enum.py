from dataclasses import dataclass, field
from typing import Enum

class FieldLogLevelEnum(str, Enum):
    NONE = "NONE"
    ERROR = "ERROR"
    ALL = "ALL"

