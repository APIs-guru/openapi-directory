from dataclasses import dataclass, field
from typing import Enum

class TaskDefinitionStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

