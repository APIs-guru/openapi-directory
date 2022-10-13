from dataclasses import dataclass, field
from typing import Enum

class ApplicationRevisionSortByEnum(str, Enum):
    REGISTER_TIME = "registerTime"
    FIRST_USED_TIME = "firstUsedTime"
    LAST_USED_TIME = "lastUsedTime"

