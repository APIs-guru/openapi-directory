from dataclasses import dataclass, field
from enum import Enum

class DeviceTypeEnum(str, Enum):
    QPU = "QPU"
    SIMULATOR = "SIMULATOR"

