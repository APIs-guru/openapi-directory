from dataclasses import dataclass, field
from typing import Enum

class InstanceActionEnum(str, Enum):
    TERMINATE = "TERMINATE"
    KEEP_ALIVE = "KEEP_ALIVE"

