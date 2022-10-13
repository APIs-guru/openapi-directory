from dataclasses import dataclass, field
from typing import Enum

class ChannelStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

