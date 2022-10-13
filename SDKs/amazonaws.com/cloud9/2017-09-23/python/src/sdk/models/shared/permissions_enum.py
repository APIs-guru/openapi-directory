from dataclasses import dataclass, field
from typing import Enum

class PermissionsEnum(str, Enum):
    OWNER = "owner"
    READ_WRITE = "read-write"
    READ_ONLY = "read-only"

