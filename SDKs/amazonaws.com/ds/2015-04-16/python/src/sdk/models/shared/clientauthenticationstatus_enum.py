from dataclasses import dataclass, field
from typing import Enum

class ClientAuthenticationStatusEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

