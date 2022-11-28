from dataclasses import dataclass, field
from enum import Enum

class RepoUpgradeOnBootEnum(str, Enum):
    SECURITY = "SECURITY"
    NONE = "NONE"

