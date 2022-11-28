from dataclasses import dataclass, field
from enum import Enum

class CPUVendorArchitectureEnum(str, Enum):
    AWS_ARM64 = "AWS_ARM64"
    CURRENT = "CURRENT"

