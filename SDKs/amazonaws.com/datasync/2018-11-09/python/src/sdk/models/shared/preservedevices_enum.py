from dataclasses import dataclass, field
from typing import Enum

class PreserveDevicesEnum(str, Enum):
    NONE = "NONE"
    PRESERVE = "PRESERVE"

