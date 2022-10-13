from dataclasses import dataclass, field
from typing import Enum

class ProjectVisibilityTypeEnum(str, Enum):
    PUBLIC_READ = "PUBLIC_READ"
    PRIVATE = "PRIVATE"

