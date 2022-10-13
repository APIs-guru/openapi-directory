from dataclasses import dataclass, field
from typing import Enum

class ConnectionTypeEnum(str, Enum):
    INTERNET = "INTERNET"
    VPC_LINK = "VPC_LINK"

