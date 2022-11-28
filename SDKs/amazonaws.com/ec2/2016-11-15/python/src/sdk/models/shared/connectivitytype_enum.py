from dataclasses import dataclass, field
from enum import Enum

class ConnectivityTypeEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"

