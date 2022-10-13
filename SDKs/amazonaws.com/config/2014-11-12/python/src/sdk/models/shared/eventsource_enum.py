from dataclasses import dataclass, field
from typing import Enum

class EventSourceEnum(str, Enum):
    AWS_CONFIG = "aws.config"

