from dataclasses import dataclass, field
from typing import Enum

class TargetTypeEnum(str, Enum):
    CONTAINER_INSTANCE = "container-instance"

