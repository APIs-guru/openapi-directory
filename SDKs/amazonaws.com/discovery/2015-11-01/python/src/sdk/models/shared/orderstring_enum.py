from dataclasses import dataclass, field
from enum import Enum

class OrderStringEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"

