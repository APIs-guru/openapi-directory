from dataclasses import dataclass, field
from typing import Enum

class LdapsStatusEnum(str, Enum):
    ENABLING = "Enabling"
    ENABLED = "Enabled"
    ENABLE_FAILED = "EnableFailed"
    DISABLED = "Disabled"

