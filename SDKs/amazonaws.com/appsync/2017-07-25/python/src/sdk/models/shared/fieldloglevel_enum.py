from dataclasses import dataclass, field
from enum import Enum

class FieldLogLevelEnum(str, Enum):
    NONE = "NONE"
    ERROR = "ERROR"
    ALL = "ALL"

