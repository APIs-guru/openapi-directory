from dataclasses import dataclass, field
from enum import Enum

class EphemeralNvmeSupportEnum(str, Enum):
    UNSUPPORTED = "unsupported"
    SUPPORTED = "supported"
    REQUIRED = "required"

