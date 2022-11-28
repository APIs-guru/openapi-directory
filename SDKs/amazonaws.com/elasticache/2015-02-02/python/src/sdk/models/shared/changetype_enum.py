from dataclasses import dataclass, field
from enum import Enum

class ChangeTypeEnum(str, Enum):
    IMMEDIATE = "immediate"
    REQUIRES_REBOOT = "requires-reboot"

