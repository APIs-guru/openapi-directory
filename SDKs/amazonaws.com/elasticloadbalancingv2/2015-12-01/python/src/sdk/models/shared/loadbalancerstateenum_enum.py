from dataclasses import dataclass, field
from enum import Enum

class LoadBalancerStateEnumEnum(str, Enum):
    ACTIVE = "active"
    PROVISIONING = "provisioning"
    ACTIVE_IMPAIRED = "active_impaired"
    FAILED = "failed"

