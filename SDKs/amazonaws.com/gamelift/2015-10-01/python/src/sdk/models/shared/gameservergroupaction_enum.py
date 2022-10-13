from dataclasses import dataclass, field
from typing import Enum

class GameServerGroupActionEnum(str, Enum):
    REPLACE_INSTANCE_TYPES = "REPLACE_INSTANCE_TYPES"

