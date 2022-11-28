from dataclasses import dataclass, field
from enum import Enum

class TransformStatusTypeEnum(str, Enum):
    NOT_READY = "NOT_READY"
    READY = "READY"
    DELETING = "DELETING"

