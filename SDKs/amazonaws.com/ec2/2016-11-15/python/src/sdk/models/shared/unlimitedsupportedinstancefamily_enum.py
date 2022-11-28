from dataclasses import dataclass, field
from enum import Enum

class UnlimitedSupportedInstanceFamilyEnum(str, Enum):
    T2 = "t2"
    T3 = "t3"
    T3A = "t3a"
    T4G = "t4g"

