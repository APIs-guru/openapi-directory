from dataclasses import dataclass, field
from typing import Enum

class PrivateConnectionProvisioningStatusEnum(str, Enum):
    FAILED = "FAILED"
    PENDING = "PENDING"
    CREATED = "CREATED"

