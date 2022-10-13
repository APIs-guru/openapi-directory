from dataclasses import dataclass, field
from typing import Enum

class DatasetStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

