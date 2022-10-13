from dataclasses import dataclass, field
from typing import Enum

class DevicePlatformEnum(str, Enum):
    ANDROID = "ANDROID"
    IOS = "IOS"

