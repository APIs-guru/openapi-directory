from dataclasses import dataclass, field
from enum import Enum

class RealtimeMetricsSubscriptionStatusEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

