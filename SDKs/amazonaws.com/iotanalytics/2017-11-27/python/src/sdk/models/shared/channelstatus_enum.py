from dataclasses import dataclass, field
from enum import Enum

class ChannelStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

