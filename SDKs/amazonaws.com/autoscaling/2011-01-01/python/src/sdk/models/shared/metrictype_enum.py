from dataclasses import dataclass, field
from enum import Enum

class MetricTypeEnum(str, Enum):
    ASG_AVERAGE_CPU_UTILIZATION = "ASGAverageCPUUtilization"
    ASG_AVERAGE_NETWORK_IN = "ASGAverageNetworkIn"
    ASG_AVERAGE_NETWORK_OUT = "ASGAverageNetworkOut"
    ALB_REQUEST_COUNT_PER_TARGET = "ALBRequestCountPerTarget"

