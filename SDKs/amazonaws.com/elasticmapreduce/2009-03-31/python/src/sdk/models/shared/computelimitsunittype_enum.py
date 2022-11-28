from dataclasses import dataclass, field
from enum import Enum

class ComputeLimitsUnitTypeEnum(str, Enum):
    INSTANCE_FLEET_UNITS = "InstanceFleetUnits"
    INSTANCES = "Instances"
    VCPU = "VCPU"

