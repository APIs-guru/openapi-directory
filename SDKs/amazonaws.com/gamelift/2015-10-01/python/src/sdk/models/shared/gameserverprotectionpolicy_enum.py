from dataclasses import dataclass, field
from enum import Enum

class GameServerProtectionPolicyEnum(str, Enum):
    NO_PROTECTION = "NO_PROTECTION"
    FULL_PROTECTION = "FULL_PROTECTION"

