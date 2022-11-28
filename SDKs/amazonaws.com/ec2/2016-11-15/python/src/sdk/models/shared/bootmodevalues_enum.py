from dataclasses import dataclass, field
from enum import Enum

class BootModeValuesEnum(str, Enum):
    LEGACY_BIOS = "legacy-bios"
    UEFI = "uefi"

