from dataclasses import dataclass, field
from enum import Enum

class NotificationStateEnum(str, Enum):
    OK = "OK"
    ALARM = "ALARM"

