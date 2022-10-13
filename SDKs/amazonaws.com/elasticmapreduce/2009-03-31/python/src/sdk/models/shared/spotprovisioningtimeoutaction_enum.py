from dataclasses import dataclass, field
from typing import Enum

class SpotProvisioningTimeoutActionEnum(str, Enum):
    SWITCH_TO_ON_DEMAND = "SWITCH_TO_ON_DEMAND"
    TERMINATE_CLUSTER = "TERMINATE_CLUSTER"

