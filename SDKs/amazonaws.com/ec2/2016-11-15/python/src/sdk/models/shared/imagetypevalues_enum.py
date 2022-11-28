from dataclasses import dataclass, field
from enum import Enum

class ImageTypeValuesEnum(str, Enum):
    MACHINE = "machine"
    KERNEL = "kernel"
    RAMDISK = "ramdisk"

