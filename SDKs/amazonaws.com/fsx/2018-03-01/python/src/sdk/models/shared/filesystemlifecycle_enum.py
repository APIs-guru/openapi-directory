from dataclasses import dataclass, field
from enum import Enum

class FileSystemLifecycleEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    CREATING = "CREATING"
    FAILED = "FAILED"
    DELETING = "DELETING"
    MISCONFIGURED = "MISCONFIGURED"
    UPDATING = "UPDATING"

