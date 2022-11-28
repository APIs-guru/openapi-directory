from dataclasses import dataclass, field
from enum import Enum

class ACLPermissionEnum(str, Enum):
    READ = "READ"
    WRITE = "WRITE"
    READ_ACP = "READ_ACP"
    WRITE_ACP = "WRITE_ACP"
    FULL_CONTROL = "FULL_CONTROL"

