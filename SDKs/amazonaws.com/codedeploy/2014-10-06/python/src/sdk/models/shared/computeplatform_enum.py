from dataclasses import dataclass, field
from typing import Enum

class ComputePlatformEnum(str, Enum):
    SERVER = "Server"
    LAMBDA = "Lambda"
    ECS = "ECS"

