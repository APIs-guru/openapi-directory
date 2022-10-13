from dataclasses import dataclass, field
from typing import Enum

class ComponentTypeEnum(str, Enum):
    BUILD = "BUILD"
    TEST = "TEST"

