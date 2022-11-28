from dataclasses import dataclass, field
from enum import Enum

class CompatibilityEnum(str, Enum):
    EC2 = "EC2"
    FARGATE = "FARGATE"
    EXTERNAL = "EXTERNAL"

