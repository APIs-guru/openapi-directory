from dataclasses import dataclass, field
from typing import Enum

class DeviceCgroupPermissionEnum(str, Enum):
    READ = "READ"
    WRITE = "WRITE"
    MKNOD = "MKNOD"

