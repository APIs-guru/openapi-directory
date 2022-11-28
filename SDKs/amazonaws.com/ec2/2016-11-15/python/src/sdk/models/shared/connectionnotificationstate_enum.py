from dataclasses import dataclass, field
from enum import Enum

class ConnectionNotificationStateEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

