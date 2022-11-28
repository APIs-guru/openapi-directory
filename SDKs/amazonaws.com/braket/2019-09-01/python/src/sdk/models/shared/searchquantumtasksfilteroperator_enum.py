from dataclasses import dataclass, field
from enum import Enum

class SearchQuantumTasksFilterOperatorEnum(str, Enum):
    LT = "LT"
    LTE = "LTE"
    EQUAL = "EQUAL"
    GT = "GT"
    GTE = "GTE"
    BETWEEN = "BETWEEN"

