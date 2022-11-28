from dataclasses import dataclass, field
from enum import Enum

class EnaSupportEnum(str, Enum):
    UNSUPPORTED = "unsupported"
    SUPPORTED = "supported"
    REQUIRED = "required"

