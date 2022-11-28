from dataclasses import dataclass, field
from enum import Enum

class ClientAuthenticationStatusEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

