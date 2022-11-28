from dataclasses import dataclass, field
from enum import Enum

class OrderByEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"

