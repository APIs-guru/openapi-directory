from dataclasses import dataclass, field
from typing import Enum

class GameServerGroupDeleteOptionEnum(str, Enum):
    SAFE_DELETE = "SAFE_DELETE"
    FORCE_DELETE = "FORCE_DELETE"
    RETAIN = "RETAIN"

