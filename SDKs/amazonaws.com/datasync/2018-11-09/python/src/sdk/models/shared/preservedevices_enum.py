from dataclasses import dataclass, field
from enum import Enum

class PreserveDevicesEnum(str, Enum):
    NONE = "NONE"
    PRESERVE = "PRESERVE"

