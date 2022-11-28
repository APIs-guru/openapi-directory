from dataclasses import dataclass, field
from enum import Enum

class MetricTypeEnum(str, Enum):
    AGGREGATED_RELATIVE_TOTAL_TIME = "AggregatedRelativeTotalTime"

