from dataclasses import dataclass, field
from enum import Enum

class DeviceTypeEnum(str, Enum):
    EBS = "ebs"
    INSTANCE_STORE = "instance-store"

