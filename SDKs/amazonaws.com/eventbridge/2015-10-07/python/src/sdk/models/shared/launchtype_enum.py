from dataclasses import dataclass, field
from typing import Enum

class LaunchTypeEnum(str, Enum):
    EC2 = "EC2"
    FARGATE = "FARGATE"
    EXTERNAL = "EXTERNAL"

