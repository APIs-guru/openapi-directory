from dataclasses import dataclass, field
from enum import Enum

class TieringPolicyNameEnum(str, Enum):
    SNAPSHOT_ONLY = "SNAPSHOT_ONLY"
    AUTO = "AUTO"
    ALL = "ALL"
    NONE = "NONE"

