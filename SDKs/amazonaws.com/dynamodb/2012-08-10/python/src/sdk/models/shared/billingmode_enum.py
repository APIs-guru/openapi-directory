from dataclasses import dataclass, field
from typing import Enum

class BillingModeEnum(str, Enum):
    PROVISIONED = "PROVISIONED"
    PAY_PER_REQUEST = "PAY_PER_REQUEST"

