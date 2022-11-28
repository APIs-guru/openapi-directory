from dataclasses import dataclass, field
from enum import Enum

class BootModeTypeEnum(str, Enum):
    LEGACY_BIOS = "legacy-bios"
    UEFI = "uefi"

