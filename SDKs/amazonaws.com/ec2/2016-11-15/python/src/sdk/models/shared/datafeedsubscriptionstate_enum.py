from dataclasses import dataclass, field
from enum import Enum

class DatafeedSubscriptionStateEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"

