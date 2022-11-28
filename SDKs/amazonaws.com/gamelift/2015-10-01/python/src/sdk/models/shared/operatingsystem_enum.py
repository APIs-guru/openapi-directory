from dataclasses import dataclass, field
from enum import Enum

class OperatingSystemEnum(str, Enum):
    WINDOWS_2012 = "WINDOWS_2012"
    AMAZON_LINUX = "AMAZON_LINUX"
    AMAZON_LINUX_2 = "AMAZON_LINUX_2"

