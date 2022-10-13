from dataclasses import dataclass, field
from typing import Enum

class TagStatusEnum(str, Enum):
    TAGGED = "TAGGED"
    UNTAGGED = "UNTAGGED"
    ANY = "ANY"

