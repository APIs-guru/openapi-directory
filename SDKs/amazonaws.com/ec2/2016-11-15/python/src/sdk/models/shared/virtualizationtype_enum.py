from dataclasses import dataclass, field
from enum import Enum

class VirtualizationTypeEnum(str, Enum):
    HVM = "hvm"
    PARAVIRTUAL = "paravirtual"

