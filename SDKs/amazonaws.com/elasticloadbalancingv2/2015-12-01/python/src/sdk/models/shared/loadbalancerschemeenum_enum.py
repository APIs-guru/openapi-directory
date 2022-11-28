from dataclasses import dataclass, field
from enum import Enum

class LoadBalancerSchemeEnumEnum(str, Enum):
    INTERNET_FACING = "internet-facing"
    INTERNAL = "internal"

