from dataclasses import dataclass, field
from enum import Enum

class ProjectVisibilityTypeEnum(str, Enum):
    PUBLIC_READ = "PUBLIC_READ"
    PRIVATE = "PRIVATE"

