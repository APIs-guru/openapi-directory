from dataclasses import dataclass, field
from typing import Enum

class StatementTypeEnum(str, Enum):
    DDL = "DDL"
    DML = "DML"
    UTILITY = "UTILITY"

