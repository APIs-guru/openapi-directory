from dataclasses import dataclass, field
from typing import Enum

class MemberPermissionsEnum(str, Enum):
    READ_WRITE = "read-write"
    READ_ONLY = "read-only"

