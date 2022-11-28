from dataclasses import dataclass, field
from enum import Enum

class DeviceCgroupPermissionEnum(str, Enum):
    READ = "READ"
    WRITE = "WRITE"
    MKNOD = "MKNOD"

