from dataclasses import dataclass, field
from enum import Enum

class TaskDefinitionStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

