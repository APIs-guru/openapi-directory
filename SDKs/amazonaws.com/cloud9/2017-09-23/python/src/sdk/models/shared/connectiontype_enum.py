from dataclasses import dataclass, field
from enum import Enum

class ConnectionTypeEnum(str, Enum):
    CONNECT_SSH = "CONNECT_SSH"
    CONNECT_SSM = "CONNECT_SSM"

