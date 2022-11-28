from dataclasses import dataclass, field
from enum import Enum

class InstanceTypeHypervisorEnum(str, Enum):
    NITRO = "nitro"
    XEN = "xen"

