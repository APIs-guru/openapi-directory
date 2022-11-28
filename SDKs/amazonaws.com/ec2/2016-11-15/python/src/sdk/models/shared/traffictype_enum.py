from dataclasses import dataclass, field
from enum import Enum

class TrafficTypeEnum(str, Enum):
    ACCEPT = "ACCEPT"
    REJECT = "REJECT"
    ALL = "ALL"

