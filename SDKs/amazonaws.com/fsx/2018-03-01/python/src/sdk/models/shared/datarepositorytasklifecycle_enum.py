from dataclasses import dataclass, field
from typing import Enum

class DataRepositoryTaskLifecycleEnum(str, Enum):
    PENDING = "PENDING"
    EXECUTING = "EXECUTING"
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"
    CANCELED = "CANCELED"
    CANCELING = "CANCELING"

