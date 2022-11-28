from dataclasses import dataclass, field
from enum import Enum

class FleetEventTypeEnum(str, Enum):
    INSTANCE_CHANGE = "instance-change"
    FLEET_CHANGE = "fleet-change"
    SERVICE_ERROR = "service-error"

