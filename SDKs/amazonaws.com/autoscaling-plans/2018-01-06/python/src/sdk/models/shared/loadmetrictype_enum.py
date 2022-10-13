from dataclasses import dataclass, field
from typing import Enum

class LoadMetricTypeEnum(str, Enum):
    ASG_TOTAL_CPU_UTILIZATION = "ASGTotalCPUUtilization"
    ASG_TOTAL_NETWORK_IN = "ASGTotalNetworkIn"
    ASG_TOTAL_NETWORK_OUT = "ASGTotalNetworkOut"
    ALB_TARGET_GROUP_REQUEST_COUNT = "ALBTargetGroupRequestCount"

