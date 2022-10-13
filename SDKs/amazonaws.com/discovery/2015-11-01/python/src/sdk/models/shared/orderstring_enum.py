from dataclasses import dataclass, field
from typing import Enum

class OrderStringEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"

