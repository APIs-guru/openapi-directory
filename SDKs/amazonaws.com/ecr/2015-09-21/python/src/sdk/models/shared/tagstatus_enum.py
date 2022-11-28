from dataclasses import dataclass, field
from enum import Enum

class TagStatusEnum(str, Enum):
    TAGGED = "TAGGED"
    UNTAGGED = "UNTAGGED"
    ANY = "ANY"

