from dataclasses import dataclass, field
from typing import Enum

class MetricTypeEnum(str, Enum):
    AGGREGATED_RELATIVE_TOTAL_TIME = "AggregatedRelativeTotalTime"

