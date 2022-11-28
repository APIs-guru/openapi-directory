from dataclasses import dataclass, field
from enum import Enum

class EventCodeEnum(str, Enum):
    INSTANCE_REBOOT = "instance-reboot"
    SYSTEM_REBOOT = "system-reboot"
    SYSTEM_MAINTENANCE = "system-maintenance"
    INSTANCE_RETIREMENT = "instance-retirement"
    INSTANCE_STOP = "instance-stop"

