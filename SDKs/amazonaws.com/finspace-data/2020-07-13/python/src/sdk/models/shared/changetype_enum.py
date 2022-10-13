from dataclasses import dataclass, field
from typing import Enum

class ChangeTypeEnum(str, Enum):
    REPLACE = "REPLACE"
    APPEND = "APPEND"
    MODIFY = "MODIFY"

