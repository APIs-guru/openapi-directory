from dataclasses import dataclass, field
from enum import Enum

class PropagateTagsEnum(str, Enum):
    TASK_DEFINITION = "TASK_DEFINITION"
    SERVICE = "SERVICE"

