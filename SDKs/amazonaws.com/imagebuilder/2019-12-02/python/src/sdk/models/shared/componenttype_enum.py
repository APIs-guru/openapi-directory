from dataclasses import dataclass, field
from enum import Enum

class ComponentTypeEnum(str, Enum):
    BUILD = "BUILD"
    TEST = "TEST"

