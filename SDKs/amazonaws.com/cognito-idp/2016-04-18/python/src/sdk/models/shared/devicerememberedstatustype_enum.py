from dataclasses import dataclass, field
from typing import Enum

class DeviceRememberedStatusTypeEnum(str, Enum):
    REMEMBERED = "remembered"
    NOT_REMEMBERED = "not_remembered"

