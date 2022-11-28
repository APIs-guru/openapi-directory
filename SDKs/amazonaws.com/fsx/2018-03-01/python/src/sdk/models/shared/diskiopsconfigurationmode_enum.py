from dataclasses import dataclass, field
from enum import Enum

class DiskIopsConfigurationModeEnum(str, Enum):
    AUTOMATIC = "AUTOMATIC"
    USER_PROVISIONED = "USER_PROVISIONED"

