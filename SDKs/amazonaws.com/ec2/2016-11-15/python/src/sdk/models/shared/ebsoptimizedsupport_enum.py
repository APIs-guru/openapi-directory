from dataclasses import dataclass, field
from enum import Enum

class EbsOptimizedSupportEnum(str, Enum):
    UNSUPPORTED = "unsupported"
    SUPPORTED = "supported"
    DEFAULT = "default"

