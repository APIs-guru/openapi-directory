from dataclasses import dataclass, field
from enum import Enum

class DriveCacheTypeEnum(str, Enum):
    NONE = "NONE"
    READ = "READ"

