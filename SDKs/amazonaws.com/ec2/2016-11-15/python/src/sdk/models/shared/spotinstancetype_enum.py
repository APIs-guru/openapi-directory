from dataclasses import dataclass, field
from enum import Enum

class SpotInstanceTypeEnum(str, Enum):
    ONE_TIME = "one-time"
    PERSISTENT = "persistent"

