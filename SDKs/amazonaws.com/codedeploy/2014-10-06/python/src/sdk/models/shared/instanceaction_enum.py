from dataclasses import dataclass, field
from enum import Enum

class InstanceActionEnum(str, Enum):
    TERMINATE = "TERMINATE"
    KEEP_ALIVE = "KEEP_ALIVE"

