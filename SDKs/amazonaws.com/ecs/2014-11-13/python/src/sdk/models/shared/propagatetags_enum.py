from dataclasses import dataclass, field
from typing import Enum

class PropagateTagsEnum(str, Enum):
    TASK_DEFINITION = "TASK_DEFINITION"
    SERVICE = "SERVICE"

