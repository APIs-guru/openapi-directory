from dataclasses import dataclass, field
from enum import Enum
from . import *


@dataclass
class RealtimeMetricsSubscriptionConfig:
    r"""RealtimeMetricsSubscriptionConfig
    A subscription configuration for additional CloudWatch metrics.
    """
    
    realtime_metrics_subscription_status: RealtimeMetricsSubscriptionStatusEnum = field()
    
