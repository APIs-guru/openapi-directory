from dataclasses import dataclass, field
from typing import Enum

class PosixPermissionsEnum(str, Enum):
    NONE = "NONE"
    PRESERVE = "PRESERVE"

