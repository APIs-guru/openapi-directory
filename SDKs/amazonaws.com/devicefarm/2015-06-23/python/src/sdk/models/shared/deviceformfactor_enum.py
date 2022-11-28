from dataclasses import dataclass, field
from enum import Enum

class DeviceFormFactorEnum(str, Enum):
    PHONE = "PHONE"
    TABLET = "TABLET"

