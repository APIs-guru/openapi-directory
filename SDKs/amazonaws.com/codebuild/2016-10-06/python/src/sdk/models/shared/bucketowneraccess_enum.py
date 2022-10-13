from dataclasses import dataclass, field
from typing import Enum

class BucketOwnerAccessEnum(str, Enum):
    NONE = "NONE"
    READ_ONLY = "READ_ONLY"
    FULL = "FULL"

