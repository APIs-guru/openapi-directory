from dataclasses import dataclass, field
from enum import Enum

class FileExistsBehaviorEnum(str, Enum):
    DISALLOW = "DISALLOW"
    OVERWRITE = "OVERWRITE"
    RETAIN = "RETAIN"

