from dataclasses import dataclass, field
from typing import Enum

class ComputeLimitsUnitTypeEnum(str, Enum):
    INSTANCE_FLEET_UNITS = "InstanceFleetUnits"
    INSTANCES = "Instances"
    VCPU = "VCPU"

