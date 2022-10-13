from dataclasses import dataclass, field
from typing import Enum

class RepoUpgradeOnBootEnum(str, Enum):
    SECURITY = "SECURITY"
    NONE = "NONE"

