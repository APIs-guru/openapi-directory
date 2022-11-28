from dataclasses import dataclass, field
from enum import Enum

class IcpRecordalStatusEnum(str, Enum):
    APPROVED = "APPROVED"
    SUSPENDED = "SUSPENDED"
    PENDING = "PENDING"

