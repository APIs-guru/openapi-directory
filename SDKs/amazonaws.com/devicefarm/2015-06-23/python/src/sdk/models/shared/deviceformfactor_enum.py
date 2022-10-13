from dataclasses import dataclass, field
from typing import Enum

class DeviceFormFactorEnum(str, Enum):
    PHONE = "PHONE"
    TABLET = "TABLET"

