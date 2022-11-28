from dataclasses import dataclass, field
from enum import Enum

class ResourceTypeEnum(str, Enum):
    GPU = "GPU"
    VCPU = "VCPU"
    MEMORY = "MEMORY"

