from dataclasses import dataclass, field
from enum import Enum

class OperatorTypeEnum(str, Enum):
    NORMALIZATION = "normalization"
    DBT = "dbt"

