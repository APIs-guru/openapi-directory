from dataclasses import dataclass, field
from typing import Enum

class SchedulingStrategyEnum(str, Enum):
    REPLICA = "REPLICA"
    DAEMON = "DAEMON"

