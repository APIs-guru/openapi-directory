from dataclasses import dataclass, field
from enum import Enum

class EbsNvmeSupportEnum(str, Enum):
    UNSUPPORTED = "unsupported"
    SUPPORTED = "supported"
    REQUIRED = "required"

