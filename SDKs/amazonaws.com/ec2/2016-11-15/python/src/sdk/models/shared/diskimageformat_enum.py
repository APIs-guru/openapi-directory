from dataclasses import dataclass, field
from typing import Enum

class DiskImageFormatEnum(str, Enum):
    VMDK = "VMDK"
    RAW = "RAW"
    VHD = "VHD"

