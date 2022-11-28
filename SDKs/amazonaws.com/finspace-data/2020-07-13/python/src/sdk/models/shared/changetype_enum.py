from dataclasses import dataclass, field
from enum import Enum

class ChangeTypeEnum(str, Enum):
    REPLACE = "REPLACE"
    APPEND = "APPEND"
    MODIFY = "MODIFY"

