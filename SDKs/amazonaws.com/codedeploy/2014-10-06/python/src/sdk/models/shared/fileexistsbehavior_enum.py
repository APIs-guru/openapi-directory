from dataclasses import dataclass, field
from typing import Enum

class FileExistsBehaviorEnum(str, Enum):
    DISALLOW = "DISALLOW"
    OVERWRITE = "OVERWRITE"
    RETAIN = "RETAIN"

