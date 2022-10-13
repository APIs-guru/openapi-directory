from dataclasses import dataclass, field
from typing import Enum

class ResourceTypeEnum(str, Enum):
    GPU = "GPU"
    VCPU = "VCPU"
    MEMORY = "MEMORY"

