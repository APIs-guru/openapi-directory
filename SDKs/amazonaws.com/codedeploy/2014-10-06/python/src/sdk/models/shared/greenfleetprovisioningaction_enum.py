from dataclasses import dataclass, field
from typing import Enum

class GreenFleetProvisioningActionEnum(str, Enum):
    DISCOVER_EXISTING = "DISCOVER_EXISTING"
    COPY_AUTO_SCALING_GROUP = "COPY_AUTO_SCALING_GROUP"

