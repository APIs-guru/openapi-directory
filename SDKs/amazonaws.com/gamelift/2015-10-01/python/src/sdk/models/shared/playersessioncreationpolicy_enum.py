from dataclasses import dataclass, field
from typing import Enum

class PlayerSessionCreationPolicyEnum(str, Enum):
    ACCEPT_ALL = "ACCEPT_ALL"
    DENY_ALL = "DENY_ALL"

