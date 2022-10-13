from dataclasses import dataclass, field
from typing import Enum

class NotificationStateEnum(str, Enum):
    OK = "OK"
    ALARM = "ALARM"

