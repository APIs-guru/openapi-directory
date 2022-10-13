from dataclasses import dataclass, field
from typing import Enum

class AmiTypesEnum(str, Enum):
    AL2_X86_64 = "AL2_x86_64"
    AL2_X86_64_GPU = "AL2_x86_64_GPU"
    AL2_ARM_64 = "AL2_ARM_64"
    CUSTOM = "CUSTOM"

