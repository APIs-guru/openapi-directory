from dataclasses import dataclass, field
from enum import Enum

class NotificationRuleStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

