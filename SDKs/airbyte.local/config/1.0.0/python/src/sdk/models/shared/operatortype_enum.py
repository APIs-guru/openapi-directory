from dataclasses import dataclass, field
from typing import Enum

class OperatorTypeEnum(str, Enum):
    NORMALIZATION = "normalization"
    DBT = "dbt"

