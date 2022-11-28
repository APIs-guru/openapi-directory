from dataclasses import dataclass, field
from enum import Enum

class DomainTypeEnum(str, Enum):
    VPC = "vpc"
    STANDARD = "standard"

