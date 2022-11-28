from dataclasses import dataclass, field
from enum import Enum

class AggregationPeriodEnum(str, Enum):
    PT5_M = "PT5M"
    PT1_H = "PT1H"
    P1_D = "P1D"

