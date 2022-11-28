from dataclasses import dataclass, field
from enum import Enum

class DatasetContentStateEnum(str, Enum):
    CREATING = "CREATING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

