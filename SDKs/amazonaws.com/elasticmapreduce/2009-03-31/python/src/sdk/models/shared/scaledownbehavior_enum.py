from dataclasses import dataclass, field
from typing import Enum

class ScaleDownBehaviorEnum(str, Enum):
    TERMINATE_AT_INSTANCE_HOUR = "TERMINATE_AT_INSTANCE_HOUR"
    TERMINATE_AT_TASK_COMPLETION = "TERMINATE_AT_TASK_COMPLETION"

