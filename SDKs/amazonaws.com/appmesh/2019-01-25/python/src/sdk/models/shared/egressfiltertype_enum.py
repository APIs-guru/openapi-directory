from dataclasses import dataclass, field
from enum import Enum

class EgressFilterTypeEnum(str, Enum):
    ALLOW_ALL = "ALLOW_ALL"
    DROP_ALL = "DROP_ALL"

