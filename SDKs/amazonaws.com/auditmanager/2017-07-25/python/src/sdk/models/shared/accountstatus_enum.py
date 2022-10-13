from dataclasses import dataclass, field
from typing import Enum

class AccountStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    PENDING_ACTIVATION = "PENDING_ACTIVATION"

