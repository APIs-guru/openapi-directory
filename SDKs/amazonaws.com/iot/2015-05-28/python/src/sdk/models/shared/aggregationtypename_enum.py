from dataclasses import dataclass, field
from enum import Enum

class AggregationTypeNameEnum(str, Enum):
    STATISTICS = "Statistics"
    PERCENTILES = "Percentiles"
    CARDINALITY = "Cardinality"

