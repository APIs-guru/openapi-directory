from dataclasses import dataclass, field
from typing import Enum

class GameServerProtectionPolicyEnum(str, Enum):
    NO_PROTECTION = "NO_PROTECTION"
    FULL_PROTECTION = "FULL_PROTECTION"

