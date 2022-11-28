from dataclasses import dataclass, field
from enum import Enum

class ComponentDependencyTypeEnum(str, Enum):
    HARD = "HARD"
    SOFT = "SOFT"

