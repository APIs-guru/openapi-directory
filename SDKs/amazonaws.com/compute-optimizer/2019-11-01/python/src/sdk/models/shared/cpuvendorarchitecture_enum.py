from dataclasses import dataclass, field
from typing import Enum

class CPUVendorArchitectureEnum(str, Enum):
    AWS_ARM64 = "AWS_ARM64"
    CURRENT = "CURRENT"

