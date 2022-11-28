from dataclasses import dataclass, field
from enum import Enum

class HypervisorTypeEnum(str, Enum):
    OVM = "ovm"
    XEN = "xen"

