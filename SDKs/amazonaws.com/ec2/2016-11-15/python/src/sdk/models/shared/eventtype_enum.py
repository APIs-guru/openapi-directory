from dataclasses import dataclass, field
from enum import Enum

class EventTypeEnum(str, Enum):
    INSTANCE_CHANGE = "instanceChange"
    FLEET_REQUEST_CHANGE = "fleetRequestChange"
    ERROR = "error"
    INFORMATION = "information"

