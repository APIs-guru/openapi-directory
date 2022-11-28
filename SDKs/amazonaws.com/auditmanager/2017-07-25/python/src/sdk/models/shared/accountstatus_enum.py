from dataclasses import dataclass, field
from enum import Enum

class AccountStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    PENDING_ACTIVATION = "PENDING_ACTIVATION"

