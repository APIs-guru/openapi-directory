from dataclasses import dataclass, field
from typing import Enum

class ManagedAgentNameEnum(str, Enum):
    EXECUTE_COMMAND_AGENT = "ExecuteCommandAgent"

