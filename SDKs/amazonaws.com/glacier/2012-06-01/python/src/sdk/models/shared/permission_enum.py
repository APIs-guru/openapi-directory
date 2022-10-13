from dataclasses import dataclass, field
from typing import Enum

class PermissionEnum(str, Enum):
    FULL_CONTROL = "FULL_CONTROL"
    WRITE = "WRITE"
    WRITE_ACP = "WRITE_ACP"
    READ = "READ"
    READ_ACP = "READ_ACP"

