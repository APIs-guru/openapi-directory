from dataclasses import dataclass, field
from enum import Enum

class GameServerInstanceStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DRAINING = "DRAINING"
    SPOT_TERMINATING = "SPOT_TERMINATING"

