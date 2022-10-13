from dataclasses import dataclass, field
from typing import Enum

class AggregateTypeEnum(str, Enum):
    AVERAGE = "AVERAGE"
    COUNT = "COUNT"
    MAXIMUM = "MAXIMUM"
    MINIMUM = "MINIMUM"
    SUM = "SUM"
    STANDARD_DEVIATION = "STANDARD_DEVIATION"

