from dataclasses import dataclass, field
from enum import Enum

class DevicePlatformEnum(str, Enum):
    ANDROID = "ANDROID"
    IOS = "IOS"

