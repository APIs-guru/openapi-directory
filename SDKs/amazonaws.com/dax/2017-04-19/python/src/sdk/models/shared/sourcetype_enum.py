from dataclasses import dataclass, field
from enum import Enum

class SourceTypeEnum(str, Enum):
    CLUSTER = "CLUSTER"
    PARAMETER_GROUP = "PARAMETER_GROUP"
    SUBNET_GROUP = "SUBNET_GROUP"

