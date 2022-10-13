from dataclasses import dataclass, field
from typing import Enum

class ReturnValueEnum(str, Enum):
    NONE = "NONE"
    ALL_OLD = "ALL_OLD"
    UPDATED_OLD = "UPDATED_OLD"
    ALL_NEW = "ALL_NEW"
    UPDATED_NEW = "UPDATED_NEW"

