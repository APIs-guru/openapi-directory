from dataclasses import dataclass, field
from enum import Enum

class PosixPermissionsEnum(str, Enum):
    NONE = "NONE"
    PRESERVE = "PRESERVE"

