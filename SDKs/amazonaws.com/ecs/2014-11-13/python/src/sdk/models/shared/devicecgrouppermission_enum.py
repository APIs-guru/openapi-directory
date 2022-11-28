from dataclasses import dataclass, field
from enum import Enum

class DeviceCgroupPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    MKNOD = "mknod"

