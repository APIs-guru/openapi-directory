from dataclasses import dataclass, field
from typing import Enum

class DeviceTypeEnum(str, Enum):
    QPU = "QPU"
    SIMULATOR = "SIMULATOR"

