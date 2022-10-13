from dataclasses import dataclass, field
from typing import Enum,List

class ListStateFilterActionEnum(str, Enum):
    INCLUDE = "include"
    EXCLUDE = "exclude"
    IGNORE = "ignore"

