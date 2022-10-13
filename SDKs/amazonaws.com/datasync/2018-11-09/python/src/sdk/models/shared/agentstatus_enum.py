from dataclasses import dataclass, field
from typing import Enum

class AgentStatusEnum(str, Enum):
    ONLINE = "ONLINE"
    OFFLINE = "OFFLINE"

