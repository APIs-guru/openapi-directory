from dataclasses import dataclass, field
from typing import Enum

class DomainConfigurationStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

