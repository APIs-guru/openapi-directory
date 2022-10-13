from dataclasses import dataclass, field
from typing import Enum

class DeviceCgroupPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    MKNOD = "mknod"

