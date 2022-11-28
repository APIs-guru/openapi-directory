from dataclasses import dataclass, field
from enum import Enum

class FileSystemMaintenanceOperationEnum(str, Enum):
    PATCHING = "PATCHING"
    BACKING_UP = "BACKING_UP"

