from dataclasses import dataclass, field
from enum import Enum

class TargetTypeEnum(str, Enum):
    CONTAINER_INSTANCE = "container-instance"

