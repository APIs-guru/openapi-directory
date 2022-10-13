from dataclasses import dataclass, field
from typing import Enum

class ComponentDependencyTypeEnum(str, Enum):
    HARD = "HARD"
    SOFT = "SOFT"

