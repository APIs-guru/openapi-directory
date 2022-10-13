from dataclasses import dataclass, field
from typing import Enum

class DatasetContentStateEnum(str, Enum):
    CREATING = "CREATING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

