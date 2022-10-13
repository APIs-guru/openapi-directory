from dataclasses import dataclass, field
from typing import Enum

class ConnectionTypeEnum(str, Enum):
    CONNECT_SSH = "CONNECT_SSH"
    CONNECT_SSM = "CONNECT_SSM"

