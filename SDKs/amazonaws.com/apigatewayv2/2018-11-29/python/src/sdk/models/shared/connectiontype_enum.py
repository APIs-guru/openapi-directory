from dataclasses import dataclass, field
from enum import Enum

class ConnectionTypeEnum(str, Enum):
    INTERNET = "INTERNET"
    VPC_LINK = "VPC_LINK"

