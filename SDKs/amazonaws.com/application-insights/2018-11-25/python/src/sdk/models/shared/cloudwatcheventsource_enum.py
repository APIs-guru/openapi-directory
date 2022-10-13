from dataclasses import dataclass, field
from typing import Enum

class CloudWatchEventSourceEnum(str, Enum):
    EC2 = "EC2"
    CODE_DEPLOY = "CODE_DEPLOY"
    HEALTH = "HEALTH"
    RDS = "RDS"

