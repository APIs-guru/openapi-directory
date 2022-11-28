from dataclasses import dataclass, field
from enum import Enum

class AggregateTypeEnum(str, Enum):
    AVERAGE = "AVERAGE"
    COUNT = "COUNT"
    MAXIMUM = "MAXIMUM"
    MINIMUM = "MINIMUM"
    SUM = "SUM"
    STANDARD_DEVIATION = "STANDARD_DEVIATION"

