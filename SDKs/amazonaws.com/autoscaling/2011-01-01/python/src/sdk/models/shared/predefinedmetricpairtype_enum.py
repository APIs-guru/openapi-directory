from dataclasses import dataclass, field
from enum import Enum

class PredefinedMetricPairTypeEnum(str, Enum):
    ASGCPU_UTILIZATION = "ASGCPUUtilization"
    ASG_NETWORK_IN = "ASGNetworkIn"
    ASG_NETWORK_OUT = "ASGNetworkOut"
    ALB_REQUEST_COUNT = "ALBRequestCount"

