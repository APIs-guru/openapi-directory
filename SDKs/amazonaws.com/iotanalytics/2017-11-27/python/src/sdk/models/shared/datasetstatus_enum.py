from dataclasses import dataclass, field
from enum import Enum

class DatasetStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

