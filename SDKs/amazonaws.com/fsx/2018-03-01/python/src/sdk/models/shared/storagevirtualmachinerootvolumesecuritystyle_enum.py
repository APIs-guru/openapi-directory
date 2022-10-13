from dataclasses import dataclass, field
from typing import Enum

class StorageVirtualMachineRootVolumeSecurityStyleEnum(str, Enum):
    UNIX = "UNIX"
    NTFS = "NTFS"
    MIXED = "MIXED"

