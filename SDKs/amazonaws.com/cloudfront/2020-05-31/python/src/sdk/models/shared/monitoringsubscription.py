from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class MonitoringSubscription:
    r"""MonitoringSubscription
    A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
    """
    
    realtime_metrics_subscription_config: Optional[RealtimeMetricsSubscriptionConfig] = field(default=None)
    
