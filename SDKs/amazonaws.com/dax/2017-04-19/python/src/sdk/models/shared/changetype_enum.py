from dataclasses import dataclass, field
from typing import Enum

class ChangeTypeEnum(str, Enum):
    IMMEDIATE = "IMMEDIATE"
    REQUIRES_REBOOT = "REQUIRES_REBOOT"

