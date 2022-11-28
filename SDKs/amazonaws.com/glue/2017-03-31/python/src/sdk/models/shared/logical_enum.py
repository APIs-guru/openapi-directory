from dataclasses import dataclass, field
from enum import Enum

class LogicalEnum(str, Enum):
    AND = "AND"
    ANY = "ANY"

