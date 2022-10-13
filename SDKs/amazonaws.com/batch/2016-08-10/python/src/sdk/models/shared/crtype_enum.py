from dataclasses import dataclass, field
from typing import Enum

class CrTypeEnum(str, Enum):
    EC2 = "EC2"
    SPOT = "SPOT"
    FARGATE = "FARGATE"
    FARGATE_SPOT = "FARGATE_SPOT"

