from dataclasses import dataclass, field
from typing import Enum

class DeviceStatusEnum(str, Enum):
    ONLINE = "ONLINE"
    OFFLINE = "OFFLINE"
    RETIRED = "RETIRED"

