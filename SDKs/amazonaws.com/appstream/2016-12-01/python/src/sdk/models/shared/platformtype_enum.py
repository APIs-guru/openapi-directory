from dataclasses import dataclass, field
from typing import Enum

class PlatformTypeEnum(str, Enum):
    WINDOWS = "WINDOWS"
    WINDOWS_SERVER_2016 = "WINDOWS_SERVER_2016"
    WINDOWS_SERVER_2019 = "WINDOWS_SERVER_2019"

