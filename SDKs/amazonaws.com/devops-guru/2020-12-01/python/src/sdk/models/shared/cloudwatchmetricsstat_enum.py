from dataclasses import dataclass, field
from enum import Enum

class CloudWatchMetricsStatEnum(str, Enum):
    SUM = "Sum"
    AVERAGE = "Average"
    SAMPLE_COUNT = "SampleCount"
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"
    P99 = "p99"
    P90 = "p90"
    P50 = "p50"

