from dataclasses import dataclass, field
from typing import Enum

class VolumeFilterNameEnum(str, Enum):
    FILE_SYSTEM_ID = "file-system-id"
    STORAGE_VIRTUAL_MACHINE_ID = "storage-virtual-machine-id"

