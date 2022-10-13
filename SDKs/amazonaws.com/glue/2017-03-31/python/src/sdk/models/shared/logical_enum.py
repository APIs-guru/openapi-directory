from dataclasses import dataclass, field
from typing import Enum

class LogicalEnum(str, Enum):
    AND = "AND"
    ANY = "ANY"

