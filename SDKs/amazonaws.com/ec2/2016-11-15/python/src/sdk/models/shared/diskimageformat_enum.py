from dataclasses import dataclass, field
from enum import Enum

class DiskImageFormatEnum(str, Enum):
    VMDK = "VMDK"
    RAW = "RAW"
    VHD = "VHD"

