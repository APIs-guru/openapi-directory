from dataclasses import dataclass, field
from enum import Enum

class TenancyEnum(str, Enum):
    DEFAULT = "default"
    DEDICATED = "dedicated"
    HOST = "host"

