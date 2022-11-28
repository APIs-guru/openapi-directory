from dataclasses import dataclass, field
from enum import Enum

class TaskDefinitionFamilyStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    ALL = "ALL"

