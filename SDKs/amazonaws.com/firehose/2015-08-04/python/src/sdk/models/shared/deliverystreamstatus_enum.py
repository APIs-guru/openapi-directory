from dataclasses import dataclass, field
from enum import Enum

class DeliveryStreamStatusEnum(str, Enum):
    CREATING = "CREATING"
    CREATING_FAILED = "CREATING_FAILED"
    DELETING = "DELETING"
    DELETING_FAILED = "DELETING_FAILED"
    ACTIVE = "ACTIVE"

