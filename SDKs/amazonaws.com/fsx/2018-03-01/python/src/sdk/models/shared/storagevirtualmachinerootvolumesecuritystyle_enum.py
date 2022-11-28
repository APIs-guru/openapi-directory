from dataclasses import dataclass, field
from enum import Enum

class StorageVirtualMachineRootVolumeSecurityStyleEnum(str, Enum):
    UNIX = "UNIX"
    NTFS = "NTFS"
    MIXED = "MIXED"

