from dataclasses import dataclass, field
from typing import Enum

class BandwidthUnitsEnum(str, Enum):
    G_HZ = "GHz"
    M_HZ = "MHz"
    K_HZ = "kHz"

