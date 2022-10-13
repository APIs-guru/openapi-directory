from dataclasses import dataclass, field
from typing import Enum

class AggregationTypeNameEnum(str, Enum):
    STATISTICS = "Statistics"
    PERCENTILES = "Percentiles"
    CARDINALITY = "Cardinality"

