from dataclasses import dataclass, field
from enum import Enum

class SchedulingStrategyEnum(str, Enum):
    REPLICA = "REPLICA"
    DAEMON = "DAEMON"

