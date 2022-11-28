from dataclasses import dataclass, field
from enum import Enum

class NotificationTypeEnum(str, Enum):
    SLACK = "slack"

