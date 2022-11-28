from dataclasses import dataclass, field
from enum import Enum

class MinimumHealthyHostsTypeEnum(str, Enum):
    HOST_COUNT = "HOST_COUNT"
    FLEET_PERCENT = "FLEET_PERCENT"

