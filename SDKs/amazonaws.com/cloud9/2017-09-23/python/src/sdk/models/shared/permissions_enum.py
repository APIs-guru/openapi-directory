from dataclasses import dataclass, field
from enum import Enum

class PermissionsEnum(str, Enum):
    OWNER = "owner"
    READ_WRITE = "read-write"
    READ_ONLY = "read-only"

