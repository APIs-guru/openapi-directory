from dataclasses import dataclass, field
from typing import Enum

class NotificationRuleStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

