from dataclasses import dataclass, field
from typing import Enum

class TransformStatusTypeEnum(str, Enum):
    NOT_READY = "NOT_READY"
    READY = "READY"
    DELETING = "DELETING"

