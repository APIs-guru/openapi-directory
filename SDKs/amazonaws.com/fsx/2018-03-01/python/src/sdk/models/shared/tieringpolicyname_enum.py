from dataclasses import dataclass, field
from typing import Enum

class TieringPolicyNameEnum(str, Enum):
    SNAPSHOT_ONLY = "SNAPSHOT_ONLY"
    AUTO = "AUTO"
    ALL = "ALL"
    NONE = "NONE"

