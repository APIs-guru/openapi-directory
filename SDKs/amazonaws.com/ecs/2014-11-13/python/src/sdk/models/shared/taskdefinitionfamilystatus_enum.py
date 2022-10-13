from dataclasses import dataclass, field
from typing import Enum

class TaskDefinitionFamilyStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    ALL = "ALL"

