from dataclasses import dataclass, field
from enum import Enum

class PlayerSessionCreationPolicyEnum(str, Enum):
    ACCEPT_ALL = "ACCEPT_ALL"
    DENY_ALL = "DENY_ALL"

