from dataclasses import dataclass, field
from enum import Enum

class LogTypeEnum(str, Enum):
    SLOW_LOG = "slow-log"

