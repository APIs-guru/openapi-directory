from dataclasses import dataclass, field
from typing import Enum

class DataRepositoryLifecycleEnum(str, Enum):
    CREATING = "CREATING"
    AVAILABLE = "AVAILABLE"
    MISCONFIGURED = "MISCONFIGURED"
    UPDATING = "UPDATING"
    DELETING = "DELETING"

